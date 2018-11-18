<template>
    <div class="navbar">
        <div class="nav_orders">
            <a href=#>Client Orders</a>
            <a href=#>Supplier Orders</a>
        </div>
        <h1 class="logo">grão</h1>
        <div class="nav_icons">
            <span class="lnr lnr-map"></span>
            <span class="lnr lnr-power-switch"></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.navbar{
    display:flex;
    flex-direction: row;    
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 100%;
}

div.nav_orders{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom: 0.1em solid var(--gold);
    width: 100%;
    padding-left:20%;
}

a{
    color: var(--gold);
    text-decoration: none;
    font-size:1.5em;
    margin-bottom: 0.5em;
}

a:first-of-type{
    padding-right: 0.5em;
}

.logo{
    margin-right: 0.4em;
    margin-left:0.4em;
}


div.nav_icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border-bottom: 0.1em solid #b09a64;
    width: 100%;
    padding-right:20%;
}

span{
    font-size:1.5em;
    margin-bottom: 0.5em;
    color: var(--gold);
}
span:last-of-type{
    padding-left:0.5em;
}

</style>