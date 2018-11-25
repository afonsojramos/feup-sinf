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
          <td>
            <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
          </td>
          <td class="text-xs-center">{{ props.item.number }}</td>
          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.client }}</td>
          <td class="text-xs-center">{{ props.item.request_date }}</td>
          <td class="text-xs-center">{{ props.item.arrival_date }}</td>
        </template>
      </v-data-table>

      <v-btn color="primary" round dark> Next </v-btn>
  </div>
    
</template>

<script>
  export default {
    data () {
      return {
        search: '',
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
}


</style>
