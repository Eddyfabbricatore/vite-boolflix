<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Logo from './components/Logo.vue';
  import SearchBar from './components/SearchBar.vue';
  import MoviesContainer from './components/MoviesContainer.vue';
  import SeriesContainer from './components/SeriesContainer.vue';

  export default {
    name: 'App',

    components:{
      Logo,
      SearchBar,
      MoviesContainer,
      SeriesContainer
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApiMovie(){
        store.isSearch = true;

        axios.get(store.apiMovieUrl, {
          params:{
            api_key: store.apiKey,
            query: store.nameToSearch
          }
        })
        .then(res => {
          store.moviesList = res.data.results;
        })
        .catch(error => {
          console.log(error);
        })
      },

      getApiSeries(){
        store.isSearch = true;

        axios.get(store.apiSeriesUrl, {
          params:{
            api_key: store.apiKey,
            query: store.nameToSearch
          }
        })
        .then(res => {
          store.seriesList = res.data.results;
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<template>
  <header class="d-flex justify-content-between align-items-center">
    <Logo />

    <SearchBar @movieSearch="(getApiMovie)" @seriesSearch="(getApiSeries)" />
  </header>

  <main>
    <MoviesContainer />

    <SeriesContainer />
  </main>
</template>

<style lang="scss">
  @use './scss/main.scss';

  header{
    height: 80px;
    background-color: #000;
  }

</style>