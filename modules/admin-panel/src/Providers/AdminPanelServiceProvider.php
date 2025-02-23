<?php

namespace Modules\AdminPanel\Providers;

use Illuminate\Support\ServiceProvider;

class AdminPanelServiceProvider extends ServiceProvider
{
    public function register(): void
    {

    }

    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'admin-panel');

        $this->loadRoutesFrom(__DIR__ . '/../../routes/web.php');
    }
}
