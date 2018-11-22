<template>
  <v-card dark>
    <v-card-title>
      Orders
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table v-model="selected"
      :headers="headers"
      :items="orders"
      :search="search"
      select-all
      class="elevation-0"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.number }}</td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.request_date }}</td>
        <td class="text-xs-right">{{ props.item.arrival_date }}</td>
        <td class="text-xs-right">{{ props.item.status }}</td>
        <td>
            <v-checkbox
            v-model="props.selected"
            primary
            hide-details
            ></v-checkbox>
      </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        selected: [],
        headers: [
          {
            text: '#',
            align: 'right',
            value: 'number'
          },
          { text: 'id', value: 'id' },
          { text: 'Request Date', value: 'request_date' },
          { text: 'Arrival Date', value: 'arrival_date' },
          { text: 'Status', value: 'status' }
        ],
        orders: [
            { value: false, number: 1, id: 'RDA21DA1', request_date: '01-03-2018', arrival_date: '25-04-2018', status: 'partial' },
            { value: false, number: 2, id: 'JRGE0YK4', request_date: '06-03-2018', arrival_date: '27-04-2018', status: 'total' },
            { value: false, number: 3, id: 'P1EASD31', request_date: '03-03-2018', arrival_date: '26-04-2018', status: 'partial' },
            { value: false, number: 4, id: 'TSDFS123', request_date: '02-03-2018', arrival_date: '25-04-2018', status: 'total' }
        ]
      }
    }
  }
</script>
<style>
    div.v-card {
        background-color: transparent !important;
        border: 0;
        box-shadow: none;
        
    }

    /* .transparent > .table,
    .transparent > .table__overflow > .table,
    .transparent > .table > .datatable__actions {
    background-color: transparent;
    } */
    table.v-datatable.v-table.theme--dark {
        background-color: transparent !important;
        color: var(--light);
    }
  
    div.theme--dark.v-table, .theme--dark.v-datatable .v-datatable__actions {
        background-color: transparent !important;
    }

</style>
