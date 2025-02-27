<?php

namespace Modules\Orders\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Products\Models\Product;

class OrderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'exists:users,id'],
            'product_id' => ['required', 'exists:products,id'],
            'description' => ['nullable'],
            'status' => ['required'],
            'count' => ['required', 'integer', 'min:1'],
            'total' => ['required', 'numeric', 'min:0'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $product = Product::find($this->product_id);

        if ($product) {
            $this->merge([
                'total' => $this->count * $product->price,
            ]);
        }
    }
}
