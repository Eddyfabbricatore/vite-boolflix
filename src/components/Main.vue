<script>
  import { store } from '../data/store';
  import Card from './partials/Card.vue';

  export default {
    name: 'Main',

    props:{
      title: String,
      type: String
    },

    components:{
      Card
    },

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container my-3">
    <h2 class="m-0 mb-3">{{ title }}</h2>

    <div class="row row-cols-4">
      <Card
        v-for="item in store[type]"
        :key="item.id"
        :item="item" />
    </div>
  </div>
</template>

<style>

</style>