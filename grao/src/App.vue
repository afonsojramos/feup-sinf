<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

#app > div.navbar + div{
  padding-left: 20%;
  padding-right: 20%;
  margin-top:2em;
  padding-bottom: 2em;
}

/***MOBILE***/
@media only screen and (max-width: 675px) {

  #app > div.navbar + div{
      padding-left:2%;
  }

  #app > div.navbar + div{
      padding-right:2%;
  }
}

@media only screen and (min-width: 675px) and (max-width: 1500px) {

  #app > div.navbar + div{
      padding-left:10%;
  }

  #app > div.navbar + div{
      padding-right:10%;
  }
}

</style>
