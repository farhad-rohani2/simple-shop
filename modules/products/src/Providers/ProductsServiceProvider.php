<?php

namespace Modules\Products\Providers;

use Gate;
use Illuminate\Support\ServiceProvider;
use Modules\Products\Models\Product;
use Modules\Products\Policies\ProductPolicy;
use Route;

class ProductsServiceProvider extends ServiceProvider
{
    public function register(): void
    {

    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/../../routes/api.php');
        Gate::policy(Product::class, ProductPolicy::class);
    }
}
