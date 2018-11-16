<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/homepage.css';
</style>