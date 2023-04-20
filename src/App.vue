<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getSearchFilm() {
      if (this.store.searchFilm !== "") {
        axios
          .get(store.apiUrlFilm, {
            params: {
              api_key: "299ac258e58fe881847557d889be5e07",
              query: this.store.searchFilm,
            },
          })
          .then((resp) => {
            console.log(resp);
            this.store.films = resp.data.results;
          });
          // this.store.searchFilm = ""
      }
        
    },
    getSearcSerie() {
      axios.get(store.apiUrlSerie, {
        params: {
          api_key: "299ac258e58fe881847557d889be5e07",
          query: this.store.searchFilm,
        },
      }).then((resp2) => {
        console.log(resp2);
        this.store.series = resp2.data.results
      })
    },
    searchApi() {
      this.getSearchFilm();
      this.getSearcSerie()
    }
  },
};
</script>

<template>
  <AppHeader  @search="searchApi"/>
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
