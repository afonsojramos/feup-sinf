<template>
  <div id="app">
    <Navbar/>
    <Orders msg="Client"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import Homepage from './components/Homepage.vue'
import Orders from './components/Orders.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Orders,
    Footer,
  }
}
</script>

<style scoped>

</style>