<template>
  <div class="route">
    <h1> Picking Route </h1>
    <div>
      <div class="infoContainer">
        <div class="left">
          <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
          <p> A1 </p>
          <div class="line"></div>
        </div>
        <div class="products">
          <v-data-table v-model="selected"
            :headers="headers"
            :items="a1"
            item-key="product"
            hide-actions
            class="elevation-0">
            <template slot="items" slot-scope="props">
              <td> <v-checkbox v-model="props.selected" primary hide-details></v-checkbox> </td>
              <td class="text-xs-center">{{ props.item.shelf }}</td>
              <td class="text-xs-center">{{ props.item.product }}</td>
              <td class="text-xs-center">{{ props.item.qnt}}</td>
              <td class="text-xs-center">{{ props.item.order_id }}</td>
              <td class="text-xs-center">{{ props.item.client }}</td>
            </template>
          </v-data-table>
        </div>
      </div>

      <div class="infoContainer">
        <div class="left">
          <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
          <p> A2 </p>
          <div class="line"></div>
        </div>
         <div class="products">
          <v-data-table v-model="selected"
            :headers="headers"
            :items="a2"
            item-key="product"
            hide-actions
            class="elevation-0">
            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
              </td>
              <td class="text-xs-center">{{ props.item.shelf }}</td>
              <td class="text-xs-center">{{ props.item.product }}</td>
              <td class="text-xs-center">{{ props.item.qnt}}</td>
              <td class="text-xs-center">{{ props.item.order_id }}</td>
              <td class="text-xs-center">{{ props.item.client }}</td>
            </template>
          </v-data-table>
        </div>
      </div>

      <div class="infoContainer">
        <div class="left">
          <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
          <p> A3 </p>
          <div class="line"></div>
        </div>
        <div class="products">
          <v-data-table v-model="selected"
            :headers="headers"
            :items="a3"
            item-key="product"
            hide-actions
            class="elevation-0">
            <template slot="items" slot-scope="props">
              <td> <v-checkbox v-model="props.selected" primary hide-details></v-checkbox> </td>
              <td class="text-xs-center">{{ props.item.shelf }}</td>
              <td class="text-xs-center">{{ props.item.product }}</td>
              <td class="text-xs-center">{{ props.item.qnt}}</td>
              <td class="text-xs-center">{{ props.item.order_id }}</td>
              <td class="text-xs-center">{{ props.item.client }}</td>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>

    <div id="route-next-button">
      <v-btn to="/route" color="primary" round dark> Next </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      selected: [],
      headers: [
        { text: 'picked', sortable: false, align: 'center' },
        { text: 'shelf', align: 'center', value: 'shelf' },
        { text: 'product', align: 'center', value: 'product' },
        { text: 'qnt', align: 'center', value: 'qnt' },
        { text: 'order id', align: 'center', value: 'order_id' },
        { text: 'client', align: 'center', value: 'client' }
      ],

      a1: [
        { value: false, shelf: 1, product: 'Lorem', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
        { value: false, shelf: 2, product: 'Ipsum', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
        { value: false, shelf: 4, product: 'Sit', order_id: 'TSDFS123', client: 'Lorem', qnt: 1 }
      ],

      a2: [
        { value: false, shelf: 1, product: 'Amet', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
        { value: false, shelf: 2, product: 'Consectetur', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
        { value: false, shelf: 3, product: 'Adipiscing', order_id: 'P1EASD31', client: 'Ipsum', qnt: 7 }
      ],

      a3: [
        { value: false, shelf: 1, product: 'Elit', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
        { value: false, shelf: 2, product: 'Sed', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 }
      ]
    }
  },
  created () {
    if (!this.$parent.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-weight: lighter;
  margin-bottom: 1em;
}

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
  margin-bottom:3em;
}

div.products p {
  line-height: 1.5em;
  padding-right: 1em;
  padding-left: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

</style>
