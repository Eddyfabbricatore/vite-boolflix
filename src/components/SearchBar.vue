<script>
  import { store } from '../data/store';

  export default {
    name: 'SearchBar',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="search-bar d-flex">
    <input
      type="text"
      class="form-control"
      placeholder="Cerca un film"
      v-model.trim="store.movieToSearch"
      @keyup.enter="$emit('movieSearch')">

    <button class="btn ms-3 me-3" @click="$emit('movieSearch')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
  @use '../scss/partials/variables.scss' as *;

  button{
    color: #fff;
    background-color: $bg-btn;

    &:hover{
      color: #fff;
      background-color: $bg-btn;
    }
  }

</style>