import Vue from "vue"
import Router from "vue-router"
import Countries from "./components/Countries"
import CountryDetail from "./components/CountryDetail"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Countries',
            component: Countries
        },
        {
            path: '/:alpha3Code/details',
            name: 'country-detail',
            component: CountryDetail,
            props: true
        }
    ]
})