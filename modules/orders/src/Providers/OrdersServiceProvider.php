<?php

namespace Modules\Orders\Providers;

use Gate;
use Illuminate\Support\ServiceProvider;
use Modules\Orders\Models\Order;
use Modules\Orders\Policies\OrderPolicy;

class OrdersServiceProvider extends ServiceProvider
{
    public function register(): void
    {

    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/../../routes/api.php');
        Gate::policy(Order::class, OrderPolicy::class);

    }
}
