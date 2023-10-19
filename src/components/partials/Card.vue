<script>
  import Stars from './Stars.vue';

  export default {
    name: 'Card',

    data(){
      return{
        flags: ['it', 'en']
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
  <div class="card">
    <div class="inner h-100">
      <div class="front h-100">
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" v-if="item.poster_path">

        <div v-else>
          <h4 class="text-center m-0">{{ item.title || item.name }}</h4>

          <img class="placeholder" src="../../assets/img/no-image-avaible.jpg">
        </div>
      </div>

      <div class="back d-flex flex-column h-100">
        <h4 class="m-0 mb-3">{{ item.title || item.name }}</h4>
        <h5 class="m-0 mb-3">{{ item.original_title || item.original_name }}</h5>

        <div class="flag m-0 mb-3">
          <img :src="getImagePath(item.original_language)" v-if="flags.includes(item.original_language)">

          <p class="m-0" v-else>Lingua: {{ item.original_language }}</p> 
        </div>
        
        <Stars :vote="item.vote_average" />
        
        <p class="overview m-0">{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../scss/variables.scss' as *;

  .card{
    border: none;
    padding: 10px;
    height: 500px;
    color: $text-color;
    background-color: $bg-body;

    .inner{
      position: relative;
      overflow: hidden;
      background-color: #000;

      &:hover{
        .front img{
          transform: scale(1.1);
          opacity: .3;
        }

        .back{
          top: 0;
        }
      }

      .front img{
        transition: all .5s;
      }

      .back{
        position: absolute;
        top: 100%;
        left: 0;
        padding: 10px;

        .overview{
          overflow: auto;
        }
      }

      .flag img{
        width: 30px;
      }
    }
  }
</style>