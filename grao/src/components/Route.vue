<template>
  <div class="route">
    
    <div class="infoContainer">
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

    <div class="infoContainer">
      <div class="left">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
        <p> A2 </p>
        <div class="line"></div>
      </div>
      <div class="products">
         <p>Lorem ipsum dolor sit amet, an solum facilis assentior per, posse novum omittantur et pri. Aliquid atomorum dissentias mei ne. Nec ea enim admodum. Iriure efficiendi te est. </p>
      </div>
    </div>

    <div class="infoContainer">
      <div class="left">
        <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
        <p> A3 </p>
        <div class="line"></div>
      </div>
      <div class="products">
         <p>Lorem ipsum dolor sit amet, an solum facilis assentior per. Lorem ipsum dolor sit amet, an solum facilis assentior per.</p>
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
div.infoContainer {
  width: 100%;
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
}

div.left .hexagon {
  width: 100%;
}

div.left p {
  position: absolute;

  height: 2.7em;
  line-height: 2.7em;
  vertical-align: middle;

  width: 100%;
  margin: 0;
  font-weight: lighter;
  text-align: center;
  color: var(--gold);
  font-size: 2.5em;
}

div.line {
  width: 51.5%;
  border-right: 0.15em solid var(--gold);
  height: 100%;
}

div.infoContainer:last-child div.line {
  display: none;
}

div.products {
  background-color: var(--babyAlpha);
  border-top: 0.1em solid var(--baby);
  border-bottom: 0.1em solid var(--baby);
  margin-top: 2.5em;
  font-size: 20px;
}

div.products p {
  line-height: 1.5em;
  padding-right: 1em;
  padding-left: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>