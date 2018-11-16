<template>
  <div class="footer">
    <hr>
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
div {
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 100%;
  margin: 0;
  z-index: 1;
}

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
}

p {
  color: #b09a64;
  font-size: 20px;
}

</style>
