<?php

namespace Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Hash;
use Modules\Auth\Http\Requests\RegisterAuthRequest;
use Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        auth()->attempt([
            'password' => $request->password,
            'email' => $request->email,
        ]);

        if (auth()->check()) {
            return $this->createToken();
        } else {
            abort(401, 'username or password is incorrect');
        }
    }

    public function register(RegisterAuthRequest $request)
    {
        $user = User::create($request->validated());
        auth()->login($user);
        return $this->createToken();
    }

    public function logout()
    {
        if (auth()->check()) {
           return auth()->user();
        }
        return request()->user()->currentAccessToken()->delete();
    }

    /**
     * @param User $user
     * @return array
     */
    public function createToken(): array
    {
        $user = auth()->user();
        $token = $user->createToken('admin-panel');
        $toArrayUser = $user->toArray();
        return $toArrayUser + ['token' => $token->plainTextToken];
    }
}
