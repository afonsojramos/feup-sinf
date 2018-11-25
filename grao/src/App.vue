<template>
  <div id="app">
    <Navbar/>
    <!--<Homepage/>-->
    <Orders msg="Client"/>
    <!--<Route/>-->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import Homepage from './components/Homepage.vue'
import Orders from './components/Orders.vue'
//import Route from './components/Route.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    //Homepage,
    Orders,
    //Route,
    Footer
  }
}
</script>
<style scoped>

#app div:nth-child(2){
  padding-left: 20%;
  padding-right: 20%;
  margin-top:2em;
  padding-bottom: 2em;
}


/***MOBILE***/
@media only screen and (max-width: 675px) {

  #app div:nth-child(2){
      padding-left:2%;
  }

  #app div:nth-child(2){
      padding-right:2%;
  }
}

@media only screen and (min-width: 675px) and (max-width: 1500px) {

  #app div:nth-child(2){
      padding-left:10%;
  }

  #app div:nth-child(2){
      padding-right:10%;
  }
}

</style>