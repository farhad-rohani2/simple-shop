<?php

namespace Modules\Auth\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class RegisterAuthRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                Rule::unique(User::class, 'email'),
            ],
            'name' => [
                'required',
            ],
            'password' => [
                'required',
                Password::defaults(),
                'confirmed'
            ],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function validated($key = null, $default = null)
    {
        $validated = parent::validated();
        $validated['password'] = bcrypt($validated['password']);
        return $validated;
    }

}
