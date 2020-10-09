<template>
    <div id="app">
        <nav class="navbar">
            <a href="#" class="top">Joey's Site</a>
            <button class="navbutton">
                <a href="/info" class="navlink">Info</a>
            </button>
            <button class="navbutton">
                <a href="/db" class="navlink">Database</a>
            </button>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app'
    };
</script>
<style>

</style>