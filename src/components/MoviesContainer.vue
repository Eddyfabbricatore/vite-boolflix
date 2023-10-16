<script>
  import { store } from '../data/store';

  export default {
    name: 'MoviesContainer',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1 class="m-0" v-if="store.isSearch">Film</h1>

    <div class="moviesContainer d-flex flex-wrap" v-if="store.moviesList.length > 0">
      <div
        class="movie d-flex flex-column mb-3 rounded"
        v-for="movie in store.moviesList"
        :key="movie.id">
        <h1 class="m-0">{{ movie.title }}</h1>
        <h2 class="m-0">{{ movie.original_title }}</h2>
        <span v-if="movie.original_language === 'it' || movie.original_language === 'IT'"><img src="../assets/img/it.png" alt="It"></span>
        <span v-else-if="movie.original_language === 'en' || movie.original_language === 'EN'"><img src="../assets/img/en.png" alt="En"></span>
        <span v-else>{{ movie.original_language }}</span>
        <span>{{ movie.vote_average }}</span>
      </div>
    </div>

    <h2 v-else>Nessun film trovato</h2>
  </div>
</template>

<style lang="scss" scoped>
  @use '../scss/partials/variables.scss' as *;
  .movie{
    border: 1px solid;
    width: $w-movie-series;

    h1{
      font-size: 1rem;
    }

    h2{
      font-size: .9rem;
    }

    span:first-of-type{
        width: $w-lang;
        height: $w-lang;
    }
  }
</style>