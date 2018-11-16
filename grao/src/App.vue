<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Homepage msg="grão"/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'app',
  components: {
    Homepage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Elsie|Encode+Sans:300');

body {
  font-family: 'Encode Sans', sans-serif;
  background: rgb(82,73,43);
  background: linear-gradient(-45deg, rgba(82,73,43,1) 0%, rgba(39,52,66,1) 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;
}

h1 {
  color: white;
  font-family: 'Elsie', cursive !important;
  font-size: 5rem;
  font-weight: 200;
}

#app {
  font-family: 'Encode Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
