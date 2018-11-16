<template>
  <div id="app">
    <h1>grão</h1>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <Homepage msg=""/>
    <div>Made with <i class="fas fa-heart"></i> in <a href="https://fe.up.pt">FEUP</a></div>
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