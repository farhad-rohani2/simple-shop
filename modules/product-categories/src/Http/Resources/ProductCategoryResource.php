<?php

namespace Modules\ProductCategories\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\ProductCategories\Models\ProductCategory;

/** @mixin ProductCategory */
class ProductCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
