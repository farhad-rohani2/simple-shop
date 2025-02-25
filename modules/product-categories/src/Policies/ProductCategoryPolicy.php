<?php

namespace Modules\ProductCategories\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Modules\ProductCategories\Models\ProductCategory;

class ProductCategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, ProductCategory $productCategory): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, ProductCategory $productCategory): bool
    {
        return true;
    }

    public function delete(User $user, ProductCategory $productCategory): bool
    {
        return true;
    }

    public function restore(User $user, ProductCategory $productCategory): bool
    {
        return true;
    }

    public function forceDelete(User $user, ProductCategory $productCategory): bool
    {
        return true;
    }
}
