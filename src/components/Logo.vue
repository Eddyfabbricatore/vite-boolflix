<script>
  export default {
    name: 'Logo'
  }
</script>

<template>
  <div class="logo ms-3">
    <img src="../assets/img/logo-boolflix.png" alt="Logo Boolflix">
  </div>
</template>

<style lang="scss" scoped>
  @use '../scss/partials/variables.scss' as *;

  .logo{
    width: $w-logo;
  }
</style>