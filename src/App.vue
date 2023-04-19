<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=299ac258e58fe881847557d889be5e07&query=").then((resp) => {
      console.log(resp);
    })
  }
}

</script>


<template>

</template>

<style lang="scss">
@use "./style/general.scss"
</style>