<?php

namespace Modules\Orders\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Modules\Orders\Models\Order;

class OrderPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Order $order): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Order $order): bool
    {
        return true;
    }

    public function delete(User $user, Order $order): bool
    {
        return true;
    }

    public function restore(User $user, Order $order): bool
    {
        return true;
    }

    public function forceDelete(User $user, Order $order): bool
    {
        return true;
    }
}
