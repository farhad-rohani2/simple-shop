<?php

namespace Modules\ProductCategories\Providers;

use Gate;
use Illuminate\Support\ServiceProvider;
use Modules\ProductCategories\Models\ProductCategory;
use Modules\ProductCategories\Policies\ProductCategoryPolicy;

class ProductCategoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {

    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/../../routes/api.php');
        Gate::policy(ProductCategory::class, ProductCategoryPolicy::class);
    }
}
