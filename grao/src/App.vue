<template>
  <div id="app">
    <Navbar/>
    <Homepage msg=""/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Homepage from './components/Homepage.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Homepage,
    Footer,
  }
}
</script>

<style scoped>

</style>