<?php

namespace Modules\Products\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\ProductCategories\Http\Resources\ProductCategoryResource;
use Modules\Products\Models\Product;

/** @mixin Product */
class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            'product_category_id' => $this->product_category_id,

            'productCategory' => new ProductCategoryResource($this->whenLoaded('productCategory')),
        ];
    }
}
