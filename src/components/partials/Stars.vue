<script>
  export default {
    name: 'Stars',

    props:{
      vote: Number
    },

    computed:{
      rating(){
        return this.vote * 10
      }
    }
  }
</script>

<template>
  <div class="stars-container">
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>

    <div class="fill d-flex" :style="`width:${rating}%`">
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .stars-container{
    width: 90px;
    position: relative;

    .fill{
      position: absolute;
      top: 4px;
      left: 1px;
      overflow: hidden;
    }
  }
</style>