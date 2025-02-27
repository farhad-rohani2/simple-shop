<?php

namespace Modules\Orders\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Orders\Models\Order;
use Modules\Products\Http\Resources\ProductResource;

/** @mixin Order */
class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'status' => $this->status,
            'comment' => $this->comment,
            'count' => $this->count,
            'total' => $this->total,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            'user_id' => $this->user_id,
            'product_id' => $this->product_id,

            'user' => new ProductResource($this->whenLoaded('user')),
            'product' => new ProductResource($this->whenLoaded('product')),
        ];
    }
}
