<template>
    <div id="app">
        <header>
            <nav>
                <ul>
                    <li v-if="!authenticated">
                        <router-link to="/auth">Login/Sign Up</router-link>
                    </li>
                    <template v-else>
                        <li v-text="'Hello ' + user.name"></li>
                        <li @click="logout" class="cursor-pointer">Logout</li>
                    </template>

                    <li>
                        <router-link to="/">Product List</router-link>
                    </li>
                    <li>
                        <router-link to="/add-product">Add product</router-link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <!--Here's the content of each route will be dynamic -->
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: 'App',
    computed: {
        ...mapState("auth", ["user", 'authenticated']),
    },
    methods: {
        ...mapActions("auth", ["logout"]),
    }
}
</script>

<style>
/* Styles for headers and links */
nav ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding: 0;
}

nav a {
    text-decoration: none;
    color: #1f2937;
    font-weight: bold;
}

nav a:hover {
    color: #3b82f6;
}
</style>
