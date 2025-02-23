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

    }

    public function view(User $user, ProductCategory $productCategory): bool
    {
    }

    public function create(User $user): bool
    {
    }

    public function update(User $user, ProductCategory $productCategory): bool
    {
    }

    public function delete(User $user, ProductCategory $productCategory): bool
    {
    }

    public function restore(User $user, ProductCategory $productCategory): bool
    {
    }

    public function forceDelete(User $user, ProductCategory $productCategory): bool
    {
    }
}
