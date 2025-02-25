<?php

use Illuminate\Support\Facades\Route;
use Modules\ProductCategories\Http\Controllers\ProductCategoryController;

Route::prefix('api')->middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('product-categories', ProductCategoryController::class);
});
