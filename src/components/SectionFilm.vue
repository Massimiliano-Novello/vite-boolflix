<script>
export default {
    name: "SectionFilm",
    props: {
        film: Object
    }
}
</script>

<template>
    <div class="card-film">
        <div class="img-card"></div>
        <div class="content-card">
            <h3>{{ film.title }}</h3>
            <h5>{{ film.original_title }}</h5>
            <p>{{ film.original_language }}</p>
            <div class="votes">
                {{ film.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>