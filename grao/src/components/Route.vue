<template>
    <div class="route">
        <h1> Picking Route </h1>
        <div>
            <div class="infoContainer" v-for="zone in zones" :key="zone.id">
                <div class="left">
                    <img class="hexagon" alt="hexagon" src="../assets/hex.svg" />
                    <p> {{zone.name}} </p>
                    <div class="line"></div>
                </div>
                <div class="products">
                    <v-data-table v-model="selected"
                        :headers="headers"
                        :items="zone.products"
                        item-key="idProduct"
                        hide-actions
                        class="elevation-0">
                        <template slot="items" slot-scope="props">
                            <td> <v-checkbox v-model="props.selected" primary hide-details></v-checkbox> </td>
                            <td class="text-xs-center">{{ props.item.section }}</td>
                            <td class="text-xs-center">{{ props.item.artigo }}</td>
                            <td class="text-xs-center">{{ props.item.qnt}}</td>
                            <td> <v-text-field v-model=props.item.qntPicked></v-text-field>
                            <td class="text-xs-center">{{ props.item.orderNumDoc }}</td>
                            <td class="text-xs-center">{{ props.item.entity }}</td>
                        </template>
                    </v-data-table>
                </div>
            </div>
        </div>

        <div id="route-next-button">
        <!-- <v-btn to="/route" color="primary" round dark> Next </v-btn> -->
            <template>
                <v-layout justify-end>
                    <v-dialog v-model="dialog" hide-overlay dark max-width="290">
                        <v-btn slot="activator" color="primary" round dark>Next</v-btn>
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to continue?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" round dark @click="dialog = false">No</v-btn>
                                <v-btn color="primary" round dark @click="sendPickingWaveRequest(), dialog = false">Yes</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
                search: '',
                selected: [],
                productsList: [],
                headers: [
                    { text: 'Picked', sortable: false, align: 'left' },
                    { text: 'Section', sortable: false, align: 'center', value: 'section' },
                    { text: 'Product', sortable: false, align: 'center', value: 'artigo' },
                    { text: 'Qnt', sortable: false, align: 'center', value: 'qnt' },
                    { text: 'Qnt Picked', sortable: false, align: 'center', value: 'qntPicked' },
                    { text: 'Document ID', sortable: false, align: 'center', value: 'orderNumDoc' },
                    { text: 'Entity', sortable: false, align: 'center', value: 'entity' }
                ],

                zones: []

            }
        },
        created () {
            if (!this.$session.exists()) {
                this.$router.replace({ name: 'Login' })
            } else 
                this.prepareRoute();
                
        },
        methods: {
            prepareRoute() {
               if(this.$session.has('routeProducts')){
                    let tempProd = this.$session.get('routeProducts');
                    this.$session.remove('routeProducts');

                    // let tempProd = [
                    //     { value: false, zone: 'A2', section: 'E', shelf: 1, product: 'Amet', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
                    //     { value: false, zone: 'A2', section: 'G', shelf: 2, product: 'Consectetur', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
                    //     { value: false, zone: 'A1', section: 'C', shelf: 2, product: 'Ipsum', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
                    //     { value: false, zone: 'A1', section: 'D', shelf: 4, product: 'Sit', order_id: 'TSDFS123', client: 'Lorem', qnt: 1 },
                    //     { value: false, zone: 'A1', section: 'H', shelf: 1, product: 'Elit', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
                    //     { value: false, zone: 'A1', section: 'J', shelf: 2, product: 'Sed', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
                    //     { value: false, zone: 'A1', section: 'B', shelf: 1, product: 'Lorem', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 }
                    // ];
                    tempProd.sort((a, b) => (a.section > b.section) ? 1 : ((b.section > a.section) ? -1 : 0));
                    console.log(tempProd);
                    this.createTables(tempProd);


               } else 
                    alert('No values');

            },

            createTables(products) {
                let lastZone = '';
                let lastId = -1;
                let j = 0;
                for(let i = 0; i < products.length; i++){
                    products[i].idProduct = j;
                    products[i].qntPicked = products[i].qnt;
                    this.productsList.push(products[i]);

                    if(products[i].zone != lastZone){
                        
                        let zone = {
                            id: lastId + 1,
                            name: products[i].zone,
                            products: [
                                products[i]
                            ]
                        }
                        this.zones.push(zone);
                        lastZone = products[i].zone;
                        lastId++;
                    } else {
                        this.zones[lastId].products.push(products[i]);
                    }
                    j++;
                }
            },

            sendPickingWaveRequest () {
                const [axios, docType] = [require('axios'), this.selected[0].orderTipoDoc];
                let doc = { TipoDoc: docType, Serie: 'A', Data: new Date().toLocaleDateString(), Moeda: 'EUR', LinhasOrigem: [] };

                this.selected.forEach(s => {
                    doc.LinhasOrigem.push({ Artigo: s.artigo, Armazem: s.zone, Quantidade: s.qntPicked, LinhasDestino: [] });
                });

                if (docType === 'ECL') {
                    // TODO: Dar handle a ECL.
                }
                else if (docType === 'ECF') {
                    // TODO: Dar handle a ECF.
                }

                console.log('Sending picking wave request...');
                axios({ 
                    method: 'post', url: 'http://localhost:2018/WebApi/Inventario/Transferencias/CreateTransfer',
                    headers: { 'Authorization': `Bearer ${this.$session.get('access')}`, 'Content-Type': 'application/json' },
                    data: doc
                })
                .then(response => console.log(`Picking wave created: ${response}`))
                .catch(err => console.log('Eu sei que isto deu erro, ainda não sei a sintaxe da query de ECL/ECF. ~Miguel'));
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

    td >>>div.v-text-field__slot{
        border-bottom: 0.01em solid var(--baby) !important;
        width: 0.3em;
    }

    td >>>div.v-text-field__slot input{
        color: var(--baby) !important;
        text-align: center;
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
