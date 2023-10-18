<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',

    data(){
      return{
        store,
        message: 'Effettua una ricerca'
      }
    },

    components:{
      Header,
      Main
    },

    methods:{
      getApi(type){
        axios.get(store.apiUrl + type, {
          params: store.apiParams
        })
        .then(res => {
          store[type] = res.data.results;

          if(!store.movie.length)  this.message = 'Nessun film o serie tv trovato';
        })
        .catch(err =>{
          console.log(err);
        })
      },

      startSearch(){
        this.getApi('movie');
        this.getApi('tv');
      }
    }
  }
</script>

<template>
  <Header @startSearch="startSearch" />

  <Main title="Film" type="movie" v-if="store.movie.length > 0" />
  <Main title="Serie Tv" type="tv" v-if="store.tv.length > 0" />

  <div class="container my-3" v-else>
    <h2 class="m-0">{{ message }}</h2>
  </div>
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>