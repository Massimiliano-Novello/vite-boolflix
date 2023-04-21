<script>
export default {
    name: "SectionFilm",
    props: {
        film: Object
    },
    // data () {
    //     flags: ["en", "it", "fr"]
    // },
    computed: {
        objVotes() {
            return Math.ceil(this.film.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="card-film g-2 text-center">
        <div class="img-card">
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
        </div>
        <div class="content-card p-2 text-start">
            <h3>Titolo:<span class="description">{{ film.title || film.name }}</span></h3>
            <h5>Titolo originale: <span class="description">{{ film.original_title || film.original_name }}</span></h5>
            <img v-if="film.original_language === 'en'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="">
            <img v-else-if="film.original_language === 'it'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg.png" alt="">
            <img v-else-if="film.original_language === 'fr'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="">
            <p v-else > {{ film.original_language }} </p>
            <div class="votes">
                <span>Voto:</span>
                <i v-for="num in 5" class="fa-star" :class="num <= objVotes ? 'fa-solid' : 'fa-regular'"></i>              
            </div>
            <h6>Overview: <span class="description">{{ film.overview }}</span></h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-film {
    height: 100%;
    &:hover .img-card {
        display: none;
    }
    &:hover .content-card {
        display: inline-block;
    }
    
    .img-card {
        height: 100%;
        img {
            border: 1px solid white;
            width: 200px;
            height: 300px;


        }
    }
        


    .content-card {
        width: 200px;
        border: 1px solid white;
        background-color: black;
       display: none;
        h3 {
            font-size: 1.3rem;
            color: white;
        }

        h5 {
            font-size: 1rem;
            color: white;
        }

        p {
            font-size: .8rem;
            color: white;
        }

        h6 {
            font-size: 1rem;
            color: white;
        }

        img {
            width: 30px;
        }

        .votes {
            color: white;
        }

        .fa-star {
            color: yellow;
        }

        .description {
            font-size: .7rem;
        }
    }

}
</style>