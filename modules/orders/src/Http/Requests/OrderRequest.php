<?php

namespace Modules\Orders\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'exists:users'],
            'description' => ['nullable'],
            'status' => ['required'],
            'comment' => ['nullable'],
            'product_id' => ['required', 'exists:products'],
            'count' => ['required', 'integer'],
            'total' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
