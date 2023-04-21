<script>
import { store } from '../store';
export default {
    name: "AppHeader",
    emits: ["search"],
    data () {
        return {
            store
        }
    }
}
</script>

<template>

    <header class="d-flex justify-content-between align-items-center p-4">
        <div class="logo">
            <h1 class="text-white">Boolflix</h1>
        </div>
        <div class="search-film text-end py-3">
            <input type="text" id="film" v-model="store.searchFilm" >
            <button @click="$emit('search')">Cerca</button>
        </div>
    </header>

</template>

<style lang="scss" scoped>
header {
    height: 100px;
    background-color: #303030;
}
</style>