<script>
  import { store } from '../data/store';

  export default {
    name: 'Header',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <header class="d-flex justify-content-between align-items-center">
    <div class="logo ms-3">
      <img src="../assets/img/logo-boolflix.png" alt="Logo Boolflix">
    </div>

    <div class="d-flex">
      <input
        type="text"
        class="form-control"
        placeholder="Cerca un film"
        v-model.trim="store.apiParams.query"
        @keyup.enter="$emit('startSearch')">

      <select class="form-select ms-3">
        <option value="">Tutti</option>
        <option value="movie">Film</option>
        <option value="tv">Serie Tv</option>
      </select>

      <button class="btn btn-danger ms-3 me-3" @click="$emit('startSearch')">Cerca</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '../scss/variables.scss' as *;

  header{
    height: 80px;
    background-image: linear-gradient(#000, $bg-body);

    .logo{
      width: 150px;
    }
  }
</style>