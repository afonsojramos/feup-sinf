<template>
  <div class="route">
    
    <div class=container>
      <div class="left">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
        <p> A1 </p>
        <div class="line"></div>
      </div>
      <div class="products">
        <p>Lorem ipsum dolor sit amet, an solum facilis assentior per, posse novum omittantur et pri. Aliquid atomorum dissentias mei ne. Nec ea enim admodum. Iriure efficiendi te est. Ea pro sale disputando, ei apeirian convenire vis. Ius et justo ludus, consul mucius no qui, te delicata voluptatum sed. Ei autem ullum vel.
          Lorem ipsum dolor sit amet, an solum facilis assentior per, posse novum omittantur et pri. Aliquid atomorum dissentias mei ne. Nec ea enim admodum. Iriure efficiendi te est.
        </p>
       </div>
    </div>

    <div class=container>
      <div class="left">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
        <p> A2 </p>
        <div class="line"></div>
      </div>
      <div class="products">
         <p>Lorem ipsum dolor sit amet, an solum facilis assentior per, posse novum omittantur et pri. Aliquid atomorum dissentias mei ne. Nec ea enim admodum. Iriure efficiendi te est. </p>
      </div>
    </div>

    <div class=container>
      <div class="left">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
        <p> A3 </p>
        <div class="line"></div>
      </div>
      <div class="products">
         <p>Lorem ipsum dolor sit amet, an solum facilis assentior per.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Route",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  width: 100%;
  /*height: 15em;*/
  /*display:flex;*/
  display: grid;
  grid-template-columns: 6em auto;
  grid-column-gap: 3em;
  min-height: 4em;
}

div.left {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 6em;
  /*margin-right: 3em;*/
}

div.left .hexagon {
  width: 100%;
}

div.left p {
  position: absolute;
  top: 1.1em;
  width: 100%;
  margin: 0;
  font-weight: lighter;
  text-align: center;
  color: var(--gold);
  font-size: 2.5em;
}

div.line {
  width: 52.5%;
  border-right: 0.3em dotted var(--gold);
  height: 100%;
}

div.container:last-child div.line {
  display: none;
}

div.products {
  /*width: 100%;*/
  background-color: var(--babyAlpha);
  border-top: 0.1em solid var(--baby);
  border-bottom: 0.1em solid var(--baby);
  margin-top: 2.5em;
  font-size:20px;
}

div.products p{
  line-height: 1em;
  padding-right: 1em;
  padding-left: 1em;
}
</style>