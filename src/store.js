import { reactive } from "vue";

export const store = reactive ({
    apiUrlFilm: "https://api.themoviedb.org/3/search/movie",
    apiUrlSerie: "https://api.themoviedb.org/3/search/tv",
    films: [],
    series: [],
    searchFilm: "",
})