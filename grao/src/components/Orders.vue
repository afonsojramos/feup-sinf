<template>
  <div class="order">
    <h1> Client Orders </h1>
    <v-data-table v-model="selected"
        :headers="ordersHeaders"
        :items="orders"
        select-all
        hide-actions
        class="elevation-0">
      <template slot="items" slot-scope="props">
        <tr>
          <td @click="handleCheckbox($event)"><v-checkbox v-model="props.selected" primary hide-details ></v-checkbox></td>
          <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.number }}</td>
          <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.id }}</td>
          <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.client }}</td>
          <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.request_date }}</td>
          <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.arrival_date }}</td>
        </tr>
        <tr class="expand" v-show="expanded[props.item.id]">
          <td colspan="100%">
            <v-expansion-panel>
              <v-expansion-panel-content v-model="expanded[props.item.id]">
                    <v-data-table v-model="selected"
                        :headers="productsHeaders"
                        :items="props.item.products"
                        hide-actions
                        class="elevation-0 products">
                      <template slot="items" slot-scope="props">
                          <td class="text-xs-center">{{ props.item.name }}</td>
                          <td class="text-xs-center">{{ props.item.section }}</td>
                          <td class="text-xs-center">{{ props.item.qnt }}</td>
                          <td class="text-xs-center">{{ props.item.stock }}</td>
                      </template>
                    </v-data-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </td>
        </tr>
      </template>
    </v-data-table>

    <div id="orders-next-button">
      <v-btn to="/route" color="primary" round dark> Next </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expanded: {},
      selected: [],
      ordersHeaders: [
        { text: '#', align: 'center', value: 'number' },
        { text: 'id', align: 'center', value: 'id' },
        { text: 'Client', align: 'center', value: 'client' },
        { text: 'Request Date', align: 'center', value: 'request_date' },
        { text: 'Arrival Date', align: 'center', value: 'arrival_date' }
      ],
      productsHeaders: [
        { text: 'Product', align: 'center', value: 'name' },
        { text: 'Section', align: 'center', value: 'section' },
        { text: 'Qnt', align: 'center', value: 'qnt' },
        { text: 'Stock', align: 'center', value: 'stock' }
      ],
      orders: [
        {
          value: false,
          number: 1,
          id: 'RDA21DA1',
          request_date: '01-03-2018',
          arrival_date: '25-04-2018',
          client: 'Lorem',
          products: [
            { name: 'Lorem', qnt: 3, stock: 4, section: 'A' },
            { name: 'Ipsum', qnt: 4, stock: 5, section: 'B' },
            { name: 'Dolor', qnt: 3, stock: 6, section: 'C' },
            { name: 'Sit', qnt: 4, stock: 8, section: 'D' }
          ]
        },
        {
          value: false,
          number: 2,
          id: 'JRGE0YK4',
          request_date: '06-03-2018',
          arrival_date: '27-04-2018',
          client: 'Ipsum',
          products: [
            { name: 'Ipsum', qnt: 4, stock: 5, section: 'B' },
            { name: 'Dolor', qnt: 3, stock: 6, section: 'C' },
            { name: 'Sit', qnt: 4, stock: 10, section: 'D' }
          ]
        },
        {
          value: false,
          number: 3,
          id: 'P1EASD31',
          request_date: '03-03-2018',
          arrival_date: '26-04-2018',
          client: 'Dolor',
          products: [
            { name: 'Dolor', qnt: 3, stock: 9, section: 'C' },
            { name: 'Sit', qnt: 4, stock: 8, section: 'D' }
          ]
        },
        {
          value: false,
          number: 4,
          id: 'TSDFS123',
          request_date: '02-03-2018',
          arrival_date: '25-04-2018',
          client: 'Sit',
          products: [
            { name: 'Ipsum', qnt: 4, stock: 9, section: 'B' }
          ]
        }
      ]
    }
  },

  created () {
    this.orders.forEach(i => {
      this.$set(this.expanded, i.id, false)
    })
    // console.log(this.expanded)
  },

  methods: {
    handleCheckbox: function (event) {
      var tr = event.target.closest('tr')
      if (tr.getAttribute('active') === 'true') {
        tr.removeAttribute('active')
      } else {
        tr.setAttribute('active', 'true')
      }
    }
  }

}
</script>
<style scoped>
h1{
  font-weight: lighter;
  margin-bottom: 1em;
}

tr.expand td{
  background-color: transparent !important;
  padding:0 !important;
}

div.products >>>tbody{
  background-color: transparent !important;
}

ul{
   box-shadow: none !important;
}

.theme--light.v-expansion-panel .v-expansion-panel__container{
  background-color:transparent !important;
  border:none;
}

tr.expand .expansion-panel {
  box-shadow: none;
}

tr.expand .expansion-panel li {
  border: none;
}

</style>
