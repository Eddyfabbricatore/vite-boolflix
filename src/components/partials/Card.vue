<script>
  import Stars from './Stars.vue';

  export default {
    name: 'Card',

    data(){
      return{
        flags: ['it', 'en',]
      }
    },

    methods:{
      getImagePath(img){
        return new URL(`../../assets/img/${img}.png`, import.meta.url).href
      }
    },

    components:{
      Stars
    },

    props:{
      item: Object
    }
  }
</script>

<template>
  <div class="card mb-3">
    <div class="card-image h-100">
      <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" v-if="item.poster_path">

      <div v-else>
        <h4 class="card-title m-0">{{ item.title || item.name }}</h4>

        <img src="../../assets/img/no-image-avaible.jpg">
      </div>
    </div>

    <div class="card-body h-100">
      <div class="info">
        <h4 class="card-title m-0 mb-3">{{ item.title || item.name }}</h4>
        <h5 class="card-title m-0 mb-3">{{ item.original_title || item.original_name }}</h5>

        <p class="flag card-text d-flex align-items-center m-0 mb-3" v-if="flags.includes(item.original_language)"><img :src="getImagePath(item.original_language)"></p>
        <p class="card-text d-flex m-0 mb-3" v-else>{{ item.original_language }}</p> 
        
        <Stars :vote="item.vote_average" />
      </div>

      <div class="overview">
        <p class="m-0">{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../scss/variables.scss' as *;
  .card{
    position: relative;
    border: none;
    height: 500px;
    background-color: $bg-body;

    .card-body{
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      color: #cccbce;

      .info{
        height: 225px;

        .flag{
          width: 25px;
          height: 20px;
        }
      }

      .overview{
        height: calc(100% - 225px);
        overflow: auto;
      }
    }

    &:hover{
      .card-body{
        display: block;
      }
    }
  }
</style>