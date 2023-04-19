<script>
import { store } from '../store';
import SectionFilm from './SectionFilm.vue';
export default {
    name: "AppMain",
    components: {
        SectionFilm
    },
    data () {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <section>
            <h2 class="my-4">Film originali Boolflix</h2>
            <div class="row row-cols-5">
                <SectionFilm v-for="(item, index) in store.films" :key="index" :film="item"/>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
</style>