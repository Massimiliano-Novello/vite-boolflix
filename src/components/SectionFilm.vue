<script>
export default {
    name: "SectionFilm",
    props: {
        film: Object
    },
    data () {
        return {
            flegs: ["en", "it", "fr"]
        }
    },
    methods: {
        getImgPath (imgPath) {
            return new URL(imgPath, import.meta.url).href; 
        }
    },
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
            <img class="rounded" :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
        </div>
        <div class="content-card p-2 text-start rounded">
            <h3>Titolo:<span class="description">{{ film.title || film.name }}</span></h3>
            <h5>Titolo originale: <span class="description">{{ film.original_title || film.original_name }}</span></h5>
            <div class="language">
                <p v-if="!flegs.includes(film.original_language)">{{ film.original_language }}</p>
                <img v-else :src="getImgPath(`../assets/img/${film.original_language}.png`)" alt="">
            </div>
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
        min-height: 300px;
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