<?php

use Illuminate\Support\Facades\Route;
use Modules\ProductCategories\Http\Controllers\ProductCategoryController;
use Modules\Products\Http\Controllers\ProductController;
use Modules\Products\Models\Product;

Route::prefix('api')->middleware(['api','auth:sanctum'])->group(function () {
    Route::resource('product', ProductController::class);
});
