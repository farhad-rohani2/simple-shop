<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Modules\Orders\Models\Order;
use Modules\Products\Models\Product;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition(): array
    {
        return [
            'description' => $this->faker->text(),
            'status' => $this->faker->word(),
            'comment' => $this->faker->word(),
            'count' => $this->faker->randomNumber(),
            'total' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'user_id' => User::factory(),
            'product_id' => Product::factory(),
        ];
    }
}
