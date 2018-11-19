<template>
    <div class="orders">
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-fixed-header>
            <md-table-toolbar>
                <div class="md-toolbar-section-start">
                    <h1 class="md-title">{{msg}} Orders</h1>
                </div>

                <md-field md-clearable class="md-toolbar-section-end">
                <md-input placeholder="Search by id..." v-model="search" @input="searchOnTable" />
                </md-field>
            </md-table-toolbar>

            <md-table-empty-state
                md-label="No orders found"
                :md-description="`No order found for this '${search}' query. Try a different id.`">
                <md-button class="md-primary md-raised" @click="newUser">ignorem este butão</md-button>
            </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="#" md-sort-by="number" md-numeric>{{ item.number }}</md-table-cell>
                <md-table-cell md-label="id" md-sort-by="id">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Request Date" md-sort-by="request_date">{{ item.request_date }}</md-table-cell>
                <md-table-cell md-label="Arrival Date" md-sort-by="arrival_date">{{ item.arrival_date }}</md-table-cell>
                <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchByID = (items, term) => {
        if (term) {
            return items.filter(item => toLower(item.id).includes(toLower(term)))
        }

        return items
    }

    export default {
        name: 'TableSearch',
        props: {
            msg: String
        },
        data: () => ({
        search: null,
        searched: [],
        orders: [
            { number: 1, id: 'RDA21DA1', request_date: '01-03-2018', arrival_date: '25-04-2018', status: 'partial' },
            { number: 2, id: 'JRGE0YK4', request_date: '06-03-2018', arrival_date: '27-04-2018', status: 'total' },
            { number: 3, id: 'P1EASD31', request_date: '03-03-2018', arrival_date: '26-04-2018', status: 'partial' },
            { number: 4, id: 'TSDFS123', request_date: '02-03-2018', arrival_date: '25-04-2018', status: 'total' }
        ]
        }),
        methods: {
            newUser () {
                window.alert('Noop')
            },
            searchOnTable () {
                this.searched = searchByID(this.orders, this.search)
            }
        },
        created () {
            this.searched = this.orders
        }
    }
</script>


 <style lang="scss" scoped>
  
    .md-field {
        max-width: 300px;
    }

    .orders {
        padding-left: 20%;
        padding-right: 20%;
    }

</style>


