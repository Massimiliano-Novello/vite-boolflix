<script>
import { store } from '../store';
import SectionFilm from './SectionFilm.vue';
export default {
    name: "AppMain",
    components: {
        SectionFilm,
    },
    data () {
        return {
            store
        }
    },
}
</script>

<template>
    <main class="main">
        <section class="container">
            <h2>Film originali Boolflix</h2>
            <div class="row row-cols-6">
                <SectionFilm v-for="(item, index) in store.films" :key="index" :film="item" />
            </div>
        </section>
        <section class="container py-3">
            <h2 class="mt-4">Serie tv Netflix</h2>
            <div class="row row-cols-6">
                <SectionFilm v-for="(item, index) in store.series" :key="index" :film="item"/>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main {
    background-color: #303030;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    

    h2 {
        color: white;
    }
}
</style>