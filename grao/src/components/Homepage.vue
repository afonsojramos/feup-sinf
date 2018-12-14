<template>
  <div class=homepage>
    <router-link to="/client/orders">
      <div class="hexContainer">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg"/>
        <span class="lnr lnr-upload"></span>
        <h1>Client Orders</h1>
      </div>
    </router-link>
    <div class="line"></div>
    <router-link to="/supplier/orders">
      <div class="hexContainer">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg"/>
        <span class="lnr lnr-download"></span>
        <h1>Supplier Orders</h1>
      </div>
    </router-link>
    <div class="line"></div>
    <router-link to="/home">
      <div class="hexContainer">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg"/>
        <span class="lnr lnr-map"></span>
        <h1>Map</h1>
      </div>
    </router-link>
    <div class="line"></div>
    <router-link to="/home">
      <div class="hexContainer">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg"/>
        <span class="lnr lnr-power-switch"></span>
        <h1>Logout</h1>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {},
   created() {
    if(!this.$parent.authenticated) {
        this.$router.replace({ name: "Login" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  text-decoration: none;
}

div.homepage{
  height:65vh;
  display:flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

div.line{
  height: 29vh;
  border-bottom: 0.3em solid var(--gold);
  flex-grow: 2;
  align-self: flex-start;
}

div.hexContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

div.hexContainer:hover{
  cursor: pointer;
}
div.hexContainer:hover span{
  color: var(--baby);
}

img.hexagon{
  width: 12em;
}

span{
  position: absolute;
  font-size: 4em;
  color: var(--gold);
  height: 3.5em;
  line-height: 3.5em;
  vertical-align: middle;
}

h1{
  text-align: center;
  color: var(--gold);
  font-weight: lighter;
  font-size: 1.5em;
  padding-top: 0.5em;
}

@media only screen and (max-width: 850px) {
  div.homepage{
    flex-direction: column;
    height: auto;
  }

  div.hexContainer{
    margin-bottom: 2em;
  }

  div.line{
    display: none;
  }

}

</style>
