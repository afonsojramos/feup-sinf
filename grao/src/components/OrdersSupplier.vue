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
                <td colspan="100%" class="colspan">
                    <v-expansion-panel>
                        <v-expansion-panel-content v-model="expanded[props.item.id]">
                                <v-data-table v-model="selected"
                                    :headers="productsHeaders"
                                    :items="props.item.products"
                                    hide-actions
                                    class="elevation-0 products">
                                    <template slot="items" slot-scope="props">
                                        <td class="artigo text-xs-center">{{ props.item.artigo }}</td>
                                        <td class="artigo text-xs-center">{{ props.item.descricao }}</td>
                                        <td class="artigo text-xs-center">{{ props.item.section }}</td>
                                        <td class="artigo text-xs-center">{{ props.item.qnt }}</td>
                                        <td class="artigo text-xs-center">{{ props.item.stock }}</td>
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
            { text: 'Artigo', align: 'center', value: 'artigo' },
            { text: 'Descrição', align: 'center', value: 'descricao' },
            { text: 'Section', align: 'center', value: 'section' },
            { text: 'Qnt', align: 'center', value: 'qnt' },
            { text: 'Stock', align: 'center', value: 'stock' }
        ],
        orders: []
        }
    },

    created () {
        
        if (!this.$session.exists()) {
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
                    'Authorization': 'Bearer ' + this.$session.get('access'), 
                    'Content-Type': 'application/json',
                },
                data: `"SELECT CC.Id, CC.DataDoc, CC.DataDescarga, CC.Entidade, CCS.Estado FROM CabecCompras CC, CabecComprasStatus CCS WHERE CC.Id = CCS.IdCabecCompras AND CC.TipoDoc ='ECF'"`,
            }).then((response) => {
                console.log("Suppliers Orders received with success.");
                //console.log(response.data.DataSet.Table);
                this.fillTable(response.data.DataSet.Table)
            }).catch(function (error){
                console.log(error);
                return null;
            });
        },

        async fillTable(orders){
            for(let i = 0; i < orders.length; i++){
                var s = orders[i].DataDoc;
                var n = s.indexOf('T');
                s = s.substring(0, n != -1 ? n : s.length);

                var order = {
                    value: false,
                    number: i,
                    id: orders[i].Id,
                    date: s,
                    supplier: orders[i].Entidade,
                    products: []
                }

                this.orders.push(order);
                await this.sendSupplierOrderProductsRequest(i, order.id);        
                this.$set(this.expanded, this.orders[i].id, false);
            }

            this.handleCheckboxAll();
        },
        sendSupplierOrderProductsRequest(index, orderId){
            console.log("Sending Supplier Order Products request.");
            const axios = require('axios');
            var data = axios({
                method: 'post',
                url: 'http://localhost:2018/WebApi/Administrador/Consulta',
                headers: { 
                    'Authorization': 'Bearer ' + this.$session.get('access'),
                    'Content-Type': 'application/json',
                },
                data: "\"SELECT CC.Id, CC.Entidade, A.Artigo, A.Descricao, VAA.Localizacao, LC.Quantidade, A.STKActual FROM CabecCompras CC, LinhasCompras LC, Artigo A, V_INV_ArtigoArmazem VAA WHERE A.Artigo = LC.Artigo AND A.Artigo = VAA.Artigo AND LC.IdCabecCompras = CC.Id AND CC.Id='" + orderId.toString() + "'\"",
            }).then((response) => {
                console.log("Supplier Order Products received with success.");
                //console.log(index, response.data.DataSet.Table);
                this.fillOrder(index, response.data.DataSet.Table);
            }).catch(function (error){
                console.log(error);
                return null;
            });
            return data;
        },
        fillOrder(index, products){
            for(let i = 0; i < products.length; i++){       
                var product = { 
                    artigo: products[i].Artigo,
                    descricao: products[i].Descricao, 
                    qnt: products[i].Quantidade,
                    stock: products[i].STKActual,
                    section: products[i].Localizacao,
                    entidade: products[i].Entidade,
                    orderId: products[i].Id
                };
                this.orders[index].products.push(product);
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
        },
        handleCheckboxAll: function () {
            let element = document.querySelector("th .v-input--selection-controls.v-input--hide-details");
            let trs = document.querySelectorAll('table.v-datatable--select-all > tbody > tr:nth-child(odd)');
            element.addEventListener("click", function(){
                if(!element.classList.contains('v-input--is-label-active')){
                    for(let i= 0; i<trs.length;i++){
                        trs[i].setAttribute('active', 'true');
                    }
                }else{
                    for(let i = 0; i < trs.length; i++){
                        trs[i].removeAttribute('active');
                    }
                }
            });
        }
    }

}
</script>
<style scoped>
h1{
  font-weight: lighter;
  margin-bottom: 1em;
}

tr.expand >>>td, 
>>>td.colspan, 
>>>td.artigo{
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
