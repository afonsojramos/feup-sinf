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
                        item-key="product"
                        hide-actions
                        class="elevation-0">
                        <template slot="items" slot-scope="props">
                            <td> <v-checkbox v-model="props.selected" primary hide-details></v-checkbox> </td>
                            <td class="text-xs-center">{{ props.item.section }}</td>
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
                                <v-btn color="primary" round dark @click="dialog = false">Yes</v-btn>
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
                producstList: [],
                headers: [
                    { text: 'picked', sortable: false, align: 'left' },
                    { text: 'section', sortable: false, align: 'center', value: 'section' },
                    { text: 'shelf', sortable: false, align: 'center', value: 'shelf' },
                    { text: 'product', sortable: false, align: 'center', value: 'product' },
                    { text: 'qnt', sortable: false, align: 'center', value: 'qnt' },
                    { text: 'order id', sortable: false, align: 'center', value: 'order_id' },
                    { text: 'client', sortable: false, align: 'center', value: 'client' }
                ],

                zones: [
                    {
                        id: 0,
                        name: "A1",
                        products: [
                            { value: false, section: 'B', shelf: 1, product: 'Lorem', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
                            { value: false, section: 'C', shelf: 2, product: 'Ipsum', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
                            { value: false, section: 'D', shelf: 4, product: 'Sit', order_id: 'TSDFS123', client: 'Lorem', qnt: 1 }
                        ]
                    },
                    {
                        id: 1,
                        name: "A2",
                        products: [
                            { value: false, section: 'E', shelf: 1, product: 'Amet', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
                            { value: false, section: 'G', shelf: 2, product: 'Consectetur', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 },
                        ],
                    },
                    {
                        id: 2,
                        name: "A1",
                        products: [
                            { value: false, section: 'H', shelf: 1, product: 'Elit', order_id: 'RDA21DA1', client: 'Sit', qnt: 3 },
                            { value: false, section: 'J', shelf: 2, product: 'Sed', order_id: 'JRGE0YK4', client: 'Dolor', qnt: 5 }
                        ]
                    }
                ]

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
                    console.log(tempProd);
                } else 
                    alert('No values');
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
