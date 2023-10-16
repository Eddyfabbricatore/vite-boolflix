<script>
  import { store } from '../data/store';

  export default {
    name: 'SeriesContainer',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1 class="m-0" v-if="store.isSearch">Series</h1>

    <div class="seriesContainer d-flex flex-wrap" v-if="store.seriesList.length > 0">
      <div
        class="series d-flex flex-column mb-3 rounded"
        v-for="series in store.seriesList"
        :key="series.id">
        <h1 class="m-0">{{ series.name }}</h1>
        <h2 class="m-0">{{ series.original_name }}</h2>
        <span v-if="series.origin_country[0] === 'it' || series.origin_country[0] === 'IT'"><img src="../assets/img/it.png" alt="It"></span>
        <span v-else-if="series.origin_country[0] === 'en' || series.origin_country[0] === 'EN'"><img src="../assets/img/en.png" alt="En"></span>
        <span v-else>{{ series.origin_country[0] }}</span>
        <span>{{ series.vote_average }}</span>
      </div>
    </div>

    <h2 v-else>Nessuna serie trovata</h2>
  </div>
</template>

<style lang="scss" scoped>
  @use '../scss/partials/variables.scss' as *;
  .series{
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