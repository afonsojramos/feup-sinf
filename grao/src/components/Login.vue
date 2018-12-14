<template>
  <div class="login">
    <div class="header">
        <div class="line"></div>
        <h1 class="logo">grão</h1>
        <div class="line"></div>
    </div>
    <div class="loginContainer">
        <label for="username">username</label>
        <input type="text" id="username" name="username" v-model="input.username">
        <label for="password">password</label>
        <input type="password" id="password" name="password" v-model="input.password">
        <v-btn v-on:click="login()" color="primary" round dark> Login </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
        input: {
            username: "",
            password: ""
        }
    }
  },

  methods:{
      login(){
        if(this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password){
            this.$emit("authenticated", true);
            this.$router.push({ name: "Home" });

            const axios = require('axios')

            axios({
                method: 'post',
                url: 'localhost:2018/WebApi/token',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: {
                    username : 'FEUP',
                    password : 'qualquer1',
                    company : 'DEMO',
                    instance : 'DEFAULT',
                    grandType : 'password',
                    line : 'professional'
                }
            }).then(function (response) {
                console.log(response);
            });
        }
        else alert("The username and/or password is incorrect");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.login{
    display:flex;
    flex-direction: column;
}

div.header{
    display:flex;
    align-items: center;
    margin-top: 15em;
}
h1.logo{
    font-size: 12em ;
}
div.line {
  border-bottom: 0.15em solid var(--gold);
  width: 100%;
  margin-top: 1em;
}
div.line:nth-child(1){
    margin-right: 2em;
}
div.line:nth-child(3){
    margin-left: 2em;
}

div.loginContainer{
    display: flex;
    flex-direction: column;
    width: 23em;
    margin-top:2em;
    align-self: center;
}

div.loginContainer label{
    color: var(--gold);
    margin-bottom:0.5em;
    padding-left: 0.8em;
}

div.loginContainer label:nth-child(3){
    margin-top: 1em;
}

div.loginContainer input{
    background-color: var(--babyAlpha);
    line-height: 2.5em;
    border-radius: 5em;
    border: 0.13em solid var(--gold);
    padding-left: 0.8em;
    outline:none;
}

div.loginContainer input:focus{
    background-color: var(--babyMedium);
}

div.loginContainer .v-btn{
    width: 7em;
    margin-right:0;
    margin-left:auto;
}

</style>
