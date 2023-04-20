<script>
export default {
    name: "SectionFilm",
    props: {
        film: Object
    }
}
</script>

<template>
    <div class="card-film g-2 text-center">
        <div class="img-card">
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
        </div>
        <div class="content-card">
            <h3>Titolo:{{ film.title }}</h3>
            <h5>{{ film.original_title }}</h5>
            <img v-if="film.original_language === 'en'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="">
            <img v-else-if="film.original_language === 'it'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg.png" alt="">
            <img v-else-if="film.original_language === 'fr'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="">
            <p v-else > {{ film.original_language }} </p>
            <div class="votes">
                {{ film.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-film {
    height: 100%;
    position: relative;

    .img-card {
        height: 100%;
        img {
            width: 200px;
            height: 300px;


        }
        &:hover {
            display: none;
        }
    }
        


    .content-card {
       display: none;
        h3 {
            font-size: 1.3rem;
        }

        h5 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }

        img {
            width: 20px;
        }
        &:hover .content-card{
            display: inline-block;
            background-color: black;
        }
    }

}
</style>