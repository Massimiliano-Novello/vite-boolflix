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
    getSerachFilm() {
      axios
        .get(store.apiUrl, {
          params: {
            api_key: "299ac258e58fe881847557d889be5e07",
            query: this.store.searchFilm,
          },
        })
        .then((resp) => {
          console.log(resp);
          this.store.films = resp.data.results;
        });
        this.store.searchFilm = ""
    },
  },
};
</script>

<template>
  <AppHeader  @search="getSerachFilm"/>
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
