<template>
    <div class="navbar">
        <div class="nav_orders">
            <a href=#>Client Orders</a>
            <span class="lnr lnr-upload"></span>
            <a href=#>Supplier Orders</a>
            <span class="lnr lnr-download"></span>
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
    font-size:1.4em;
    padding-bottom: 1em;
    font-weight: lighter;
}
a:hover{
    text-decoration: none !important;
    color: var(--baby);
}


a:first-of-type{
    margin-right: 1em;
}

div.nav_orders span{
    display:none;
}

.logo{
    margin-right: 0.4em;
    margin-left:0.4em;
    margin-top:1em;
    transition: 0.25s;
}

.logo:hover{
    color:var(--gold);
    cursor: pointer;
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
    padding-bottom: 1em;
    color: var(--gold);
}
span:last-of-type{
    padding-left:0.5em;
}
span:hover{
    color: var(--baby);
    cursor: pointer;
}

/***MOBILE***/
@media only screen and (max-width: 1000px) {

    div.nav_orders span{
        display:block;
    }

    div.nav_orders a{
        display:none;
    }
}

@media only screen and (max-width: 675px) {
 
    div.nav_orders{
       padding-left:2%;
    }
    div.nav_icons{
       padding-right:2%;
    }
}

@media only screen and (min-width: 675px) and (max-width: 1300px) {
 
    div.nav_orders{
       padding-left:10%;
    }
    div.nav_icons{
       padding-right:10%;
    }
}
</style>