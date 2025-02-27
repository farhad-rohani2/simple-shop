<?php

namespace Modules\Auth\Http\Requests;


use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\RequiredIf;

class LoginAuthRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => [
                'required',
            ],
            'password' => [
                'required'
            ],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }


}

