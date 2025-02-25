<?php

namespace Modules\Auth\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rules\RequiredIf;
use Modules\Otp\Rules\OtpRule;

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

}
