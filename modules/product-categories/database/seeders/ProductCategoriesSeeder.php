<?php

namespace Modules\ProductCategories\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\ProductCategories\Models\ProductCategory;

class ProductCategoriesSeeder extends Seeder
{
    public function run(): void
    {

        $categories = [
            [
                'name' => 'тяжелый'
            ],

            [
                'name' => 'хрупкий'
            ],

            [
                'name' => 'легкий'
            ],
        ];

        foreach ($categories as $category) {
            ProductCategory::firstOrCreate($category);
        }
    }
}
