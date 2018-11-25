<template>
  <div class="order">
    <h1> Client Orders </h1>
    <v-data-table v-model="selected"
        :headers="headers"
        :items="orders"
        select-all
        hide-actions
        class="elevation-0"
      >
        <template slot="items" slot-scope="props">
          <tr>
            <td><v-checkbox v-model="props.selected" primary hide-details></v-checkbox></td>
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
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </td>
          </tr>
        </template>
      </v-data-table>

      <v-btn color="primary" round dark> Next </v-btn>
  </div>
    
</template>

<script>
  export default {
    data () {
      return {
        expanded: {},
        selected: [],
        headers: [
          { text: '#', align: 'center', value: 'number'},
          { text: 'id', align: 'center', value: 'id' },
          { text: 'Client', align: 'center', value: 'client' },
          { text: 'Request Date', align: 'center', value: 'request_date' },
          { text: 'Arrival Date', align: 'center', value: 'arrival_date' }
          
        ],
        orders: [
            { value: false, number: 1, id: 'RDA21DA1', request_date: '01-03-2018', arrival_date: '25-04-2018', client: 'Lorem' },
            { value: false, number: 2, id: 'JRGE0YK4', request_date: '06-03-2018', arrival_date: '27-04-2018', client: 'Ipsum' },
            { value: false, number: 3, id: 'P1EASD31', request_date: '03-03-2018', arrival_date: '26-04-2018', client: 'Dolor' },
            { value: false, number: 4, id: 'TSDFS123', request_date: '02-03-2018', arrival_date: '25-04-2018', client: 'Sit' }
        ]
      }
    },

    created () {
      this.orders.forEach(i => {
        this.$set(this.expanded, i.id, false) 
      })
     //console.log(this.expanded)
    }
  }
</script>
<style scoped>
h1{
  font-weight: lighter;
  margin-bottom: 1em;
}

>>>tbody tr{
  border-bottom: 0.1em solid var(--baby) !important;
  color: var(--light) !important;
}

>>>ul{
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