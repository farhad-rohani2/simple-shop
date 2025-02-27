<?php

use Illuminate\Support\Facades\Route;
use Modules\Orders\Http\Controllers\OrderController;
use Modules\ProductCategories\Http\Controllers\ProductCategoryController;

Route::prefix('api')->middleware(['api','auth:sanctum'])->group(function () {
    Route::resource('order', OrderController::class);
});
