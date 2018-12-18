<template>
    <div id="app">
        <Navbar/>
        <router-view />
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
    },
    data () {
        return{
            mockAccount: {
                username: "grao",
                password: "grao"
            }
        }
    },
    created () {
        if(!this.$session.exists()) {
            this.$router.replace({ name: "Login" });
        }
    },
    methods:{
        tokenRequest(){
            if(!this.$session.exists())
                this.$session.start();
            this.sendTokenRequest();
            setInterval(function () {this.sendTokenRequest();}.bind(this), 300000); //5 minutes
        },
        sendTokenRequest(){
            console.log("Sending token request.");
            const axios = require('axios')
            axios({
                method: 'post',
                url: 'http://localhost:2018/WebApi/token',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                },
                data: "grant_type=password&username=FEUP&password=qualquer1&company=DEMO&instance=Default&line=professional",
            }).then((response) => {
                this.$session.set('type', response.data.token_type);
                this.$session.set('access', response.data.access_token);
                console.log("Token received with success.");
                console.log(response.data);
            }).catch(function (error){
                console.log(error);
            });
        } 
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
