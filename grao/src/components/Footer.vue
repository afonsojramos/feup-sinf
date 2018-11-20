<template>
  <div class="footer">
    <p>For Information Systems, Faculty of Engineering of the University of Porto</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 0.1em solid #b09a64;
  margin: 0;  
  padding-left:20%;
  padding-right: 20%;
}

p {
  color: #b09a64;
  font-size: 1em;
  margin-top:0.6em;
  margin-bottom:0.6em;

}

/***MOBILE***/
@media only screen and (max-width: 675px) {

 div.footer{
    padding-left:2%;
    padding-right:2%;
  }
}

@media only screen and (min-width: 675px) and (max-width: 1300px) {

 div.footer{
    padding-left:10%;
    padding-right:10%;
  }
}



</style>