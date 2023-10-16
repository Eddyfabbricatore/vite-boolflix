<script>
  import { store } from '../data/store';

  export default {
    name: 'FilmsContainer',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="movie in store.moviesList" :key="movie.id">Titolo: {{ movie.title }} 
                                                            Titolo Originale: {{ movie.original_title }}
                                                            Lingua: {{ movie.original_language }}
                                                            Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>