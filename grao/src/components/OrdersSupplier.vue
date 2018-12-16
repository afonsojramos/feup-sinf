<template>
    <div class="order">
        <h1>Supplier Orders</h1>
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
            <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.supplier }}</td>
            <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.date }}</td>
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
            { text: 'Supplier', align: 'center', value: 'supplier' },
            { text: 'Date', align: 'center', value: 'date' },
        ],
        productsHeaders: [
            { text: 'Product', align: 'center', value: 'name' },
            { text: 'Section', align: 'center', value: 'section' },
            { text: 'Qnt', align: 'center', value: 'qnt' },
            { text: 'Stock', align: 'center', value: 'stock' }
        ],
        orders: []
        }
    },

    created () {
        
        if (!this.$parent.authenticated) {
            this.$router.replace({ name: "Login" });
        } else {
            this.sendSuppliersOrdersRequest();    
        }	    
    },
    methods: {
        sendSuppliersOrdersRequest(){
            console.log("Sending Suppliers Orders request.");
            const axios = require('axios');
            axios({
                method: 'post',
                url: 'http://localhost:2018/WebApi/Administrador/Consulta',
                headers: { 
                    'Authorization': 'Bearer ' + this.$parent.token.access, 
                    'Content-Type': 'application/json',
                },
                data: `"SELECT CC.Id, CC.DataDoc, CC.DataDescarga, CC.Entidade, CCS.Estado FROM CabecCompras CC, CabecComprasStatus CCS WHERE CC.Id = CCS.IdCabecCompras AND CC.TipoDoc ='ECF'"`,
            }).then((response) => {
                console.log("Suppliers Orders received with success.");
                console.log(response.data);
                this.fillTable(response.data.DataSet.Table)
            }).catch(function (error){
                console.log(error);
                return null;
            });
        },

        fillTable(orders){
            for(let i = 0; i < orders.length; i++){
                console.log(orders[i].Id);

                var s = orders[i].DataDoc;
                var n = s.indexOf('T');
                s = s.substring(0, n != -1 ? n : s.length);
                
                var order = {
                value: false,
                number: i,
                id: orders[i].Id,
                date: s,
                supplier: orders[i].Entidade,
                products: [
                    { name: 'Lorem', qnt: 3, stock: 4, section: 'A' },
                    { name: 'Ipsum', qnt: 4, stock: 5, section: 'B' },
                    { name: 'Dolor', qnt: 3, stock: 6, section: 'C' },
                    { name: 'Sit', qnt: 4, stock: 8, section: 'D' }
                ]
                }

                this.orders.push(order);
                this.$set(this.expanded, orders[i].Id, false);
            }
        },

        handleCheckbox: function (event) {
            var tr = event.target.closest('tr')
            if (tr.getAttribute('active') === 'true' && tr.getElementsByTagName('i').item(0).innerText === 'check_box') {
                tr.getElementsByTagName('i').item(0).innerText = 'check_box_outline_blank'
                tr.removeAttribute('active')
            } else if (tr.getAttribute('active') !== 'true' && tr.getElementsByTagName('i').item(0).innerText === 'check_box_outline_blank') {
                tr.getElementsByTagName('i').item(0).innerText = 'check_box'
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
