<template>
  <div class="footer">
    <hr>
  </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

hr {
  border: 0;
  color: #b09a64;
  background-color: #b09a64;
  height: 3px;
   position: absolute;
  left: 0;
  bottom: 35px;
  width: 100%;
  margin: 0;

}

</style>
