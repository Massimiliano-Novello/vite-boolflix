<script>
import { store } from '../store';
import SectionFilm from './SectionFilm.vue';
import SectionSerie from './SectionSerie.vue';
export default {
    name: "AppMain",
    components: {
        SectionFilm,
        SectionSerie
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
        <section>
            <h2 class="my-4">Film originali Boolflix</h2>
            <div class="row">
                <SectionFilm v-for="(item, index) in store.films" :key="index" :film="item" class="col-1 flex-nowrap"/>
            </div>
        </section>
        <section>
            <h2 class="mt-4">Serie tv Netflix</h2>
            <div class="row row-cols-8">
                <SectionSerie v-for="(item, index) in store.series" :key="index" :serie="item"/>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main {
    background-color: #303030;
    height: calc(100vh - 100px);
    overflow-y: scroll;
}
</style>