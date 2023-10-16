<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Logo from './components/Logo.vue';
  import SearchBar from './components/SearchBar.vue';
  import FilmsContainer from './components/FilmsContainer.vue';

  export default {
    name: 'App',

    components:{
      Logo,
      SearchBar,
      FilmsContainer
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApiMovie(){
        axios.get(store.apiMovieUrl, {
          params:{
            api_key: store.apiKey,
            query: store.movieToSearch
          }
        })
        .then(res => {
          store.moviesList = res.data.results;
          console.log(res.data.results);
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

    <SearchBar @movieSearch="getApiMovie" />
  </header>

  <main>
    <FilmsContainer />
  </main>
</template>

<style lang="scss">
  @use './scss/main.scss';

  header{
    height: 80px;
    background-color: #000;
  }

</style>