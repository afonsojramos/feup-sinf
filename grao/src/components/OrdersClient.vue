<template>
    <div class="order">
        <h1>Client Orders</h1>
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
                    <td class="text-xs-center" @click="expanded[props.item.id] = !expanded[props.item.id]">{{ props.item.entity }}</td>
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
                                            <td class="artigo text-xs-center">{{ props.item.zone }}</td>
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

        <div id="orders-next-button" @click="prepareRoute()">
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
                    { text: 'Client', align: 'center', value: 'entity' },
                    { text: 'Date', align: 'center', value: 'date' },
                ],
                productsHeaders: [
                    { text: 'Product', align: 'center', value: 'artigo' },
                    { text: 'Description', align: 'center', value: 'descricao' },
                    { text: 'Zone', align: 'center', value: 'zone' },
                    { text: 'Qnt', align: 'center', value: 'qnt' },
                    { text: 'Stock', align: 'center', value: 'stock' }
                ],
                orders: []
            }
        },

        created () {
            if (!this.$session.exists()) {
                this.$router.replace({ name: 'Login' })
            } else{
                this.sendClientsOrdersRequest();
            }
        },

        methods: {
            sendClientsOrdersRequest(){
                console.log("Sending Clients Orders request.");
                const axios = require('axios')
                var data = axios({
                    method: 'post',
                    url: 'http://localhost:2018/WebApi/Administrador/Consulta',
                    headers: { 
                        'Authorization': 'Bearer ' + this.$session.get('access'), 
                        'Content-Type': 'application/json',
                    },
                    data: `"SELECT CD.Id, CD.Data, CD.DataDescarga, CD.Entidade, CDS.Estado FROM CabecDoc CD, CabecDocStatus CDS WHERE CDS.IdCabecDoc = CD.Id AND CD.TipoDoc ='ECL'"`,
                }).then((response) => {
                    console.log("Clients Orders received with success.");
                    //console.log(response.data.DataSet.Table);
                    this.fillTable(response.data.DataSet.Table);
                }).catch(function (error){
                    console.log(error);
                    return null;
                });
                return data;
            },

            async fillTable(orders){
                for(let i = 0; i < orders.length; i++){
                    var s = orders[i].Data;
                    var n = s.indexOf('T');
                    s = s.substring(0, n != -1 ? n : s.length);

                    var order = {
                        value: false,
                        number: i,
                        id: orders[i].Id,
                        date: s,
                        entity: orders[i].Entidade,
                        products: []
                    }

                    this.orders.push(order);
                    await this.sendClientOrderProductsRequest(i, order.id);        
                    this.$set(this.expanded, order.id, false);
                }
            },

            sendClientOrderProductsRequest(index, orderId){
                console.log("Sending Client Order Products request.");
                const axios = require('axios');
                var data = axios({
                    method: 'post',
                    url: 'http://localhost:2018/WebApi/Administrador/Consulta',
                    headers: { 
                        'Authorization': 'Bearer ' + this.$session.get('access'), 
                        'Content-Type': 'application/json',
                    },
                    data: "\"SELECT CD.Id, CD.Entidade, A.Artigo, A.Descricao, A.LocalizacaoSugestao, LD.Quantidade, A.STKActual FROM CabecDoc CD, LinhasDoc LD, Artigo A, V_INV_ArtigoArmazem VAA WHERE A.Artigo = LD.Artigo AND A.Artigo = VAA.Artigo AND LD.IdCabecDoc = CD.Id AND LD.Localizacao = VAA.Localizacao AND CD.Id='" + orderId.toString() + "'\"",
                }).then((response) => {
                    console.log("Client Order Products received with success.");
                    console.log(index, response.data.DataSet.Table);
                    this.fillOrder(index, response.data.DataSet.Table);
                }).catch(function (error){
                    console.log(error);
                    return null;
                });
                return data;
            },

            fillOrder(index, products){
                for(let i = 0; i < products.length; i++){   
                    let tempSection = products[i].LocalizacaoSugestao.split('.');

                    var product = { 
                        artigo: products[i].Artigo,
                        descricao: products[i].Descricao, 
                        qnt: products[i].Quantidade,
                        stock: products[i].STKActual,
                        zone: tempSection[0],
                        section: tempSection[1],
                        shelf: tempSection[2],
                        entity: products[i].Entidade,
                        orderId: products[i].Id
                    };
                    this.orders[index].products.push(product);
                }
                this.handleCheckboxAll();
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
            },

            prepareRoute() {
                console.log(this.selected);
                let allProducts = [];
                for (let i = 0; i < this.selected.length; i++){
                    console.log(i);
                    for(let j = 0; j < this.orders[this.selected[i].number].products.length; j++){
                        allProducts.push(this.orders[this.selected[i].number].products[j]);
                    }
                }
                console.log(allProducts);
                this.$session.set('routeProducts', allProducts);
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
