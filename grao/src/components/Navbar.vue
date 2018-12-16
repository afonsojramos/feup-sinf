<template>
    <div v-if="this.$route.path !== '/login'" class="navbar">
        <div class="nav_orders">
            <router-link v-if="this.$route.path !== '/home'" to="/client/orders">
                <div class="nav_client">
                    <span class="lnr lnr-upload"></span>
                    <span class="nav_text">Client Orders</span>
                </div>
            </router-link>
            <a><span v-if="this.$route.path === '/home'" style="visibility: hidden;" class="lnr lnr-power-switch"></span></a>
            <router-link v-if="this.$route.path !== '/home'" to="/supplier/orders">
                <div class="nav_supplier">
                    <span class="lnr lnr-download"></span>
                    <span class="nav_text">Supplier Orders</span>
                </div>
            </router-link>
            </div>
            <router-link to="/home"><h1 class="logo">grão</h1></router-link>
            <div class="nav_icons">
            <router-link v-if="this.$route.path !== '/home'" to="/home">
                <div class="nav_map">
                    <span class="lnr lnr-map"></span>
                    <span class="nav_text">Map</span>
                </div>
            </router-link>
            <a><span v-if="this.$route.path === '/home'" style="visibility: hidden;" class="lnr lnr-power-switch"></span></a>
            <router-link v-if="this.$route.path !== '/home'" to="/home">
                <div class="nav_logout" @click="logout()">
                    <span class="lnr lnr-power-switch"></span>
                    <span class="nav_text">Logout</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {},
        methods: {
            logout() {
                if(this.$session.exists())
                    this.$session.destroy();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 12vh;
        width: 100%;
    }

    div.nav_orders {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        border-bottom: 0.1em solid var(--gold);
        width: 100%;
        padding-left: 20%;
        padding-bottom: 1em;
    }

    a {
        color: var(--gold);
        text-decoration: none;
        font-size: 1.6em;
        font-weight: lighter;
    }

    a:hover {
        text-decoration: none !important;
    }

    span {
        font-size: 1em;
        color: var(--gold);
    }

    div.nav_orders {
        padding-right: 0.3em;
    }

    div.nav_supplier {
        padding-left: 1em;
    }

    div.nav_icons {
        padding-right: 0.3em;
    }

    div.nav_logout {
        padding-left: 1em;
    }

    div.nav_client:hover span,
    div.nav_client:hover,
    div.nav_supplier:hover span,
    div.nav_supplier:hover,
    div.nav_map:hover span,
    div.nav_map:hover,
    div.nav_logout:hover span,
    div.nav_logout:hover {
        color: var(--baby);
        cursor: pointer;
    }

    h1.logo {
        margin-right: 0.4em;
        margin-left: 0.4em;
        margin-top: 0.2em;
        transition: 0.25s;
        font-size: 6rem;
    }

    h1.logo:hover {
        color: var(--gold);
        cursor: pointer;
    }

    div.nav_icons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        border-bottom: 0.1em solid #b09a64;
        width: 100%;
        padding-right: 20%;
        padding-bottom: 1em;
    }

    /***MOBILE***/
    @media only screen and (max-width: 1100px) {
        span#lnr {
            display: block;
        }

        .nav_text {
            display: none;
        }

        div.nav_supplier {
            padding-left: 0.5em;
        }

        div.nav_logout {
            padding-left: 0.5em;
        }
    }

    @media only screen and (max-width: 675px) {
        div.nav_orders {
            padding-left: 2%;
        }
        div.nav_icons {
            padding-right: 2%;
        }

    }

    @media only screen and (min-width: 675px) and (max-width: 1500px) {
        div.nav_orders {
            padding-left: 10%;
        }
        div.nav_icons {
            padding-right: 10%;
        }
    }
</style>
