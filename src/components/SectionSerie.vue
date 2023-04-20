<script>
export default {
    name: "SectionSerie",
    props: {
        serie: Object
    }
}
</script>


<template>
    <div class="card-film">
        <div class="img-card"></div>
        <div class="content-card">
            <h3>{{ serie.original_name }}</h3>
            <h5>{{ serie.name }}</h5>
            <p > {{ serie.original_language }} </p>
            <div class="votes">
                {{ serie.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>