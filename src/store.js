import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        // poner variables y colecciones aquí
        count: 0,
        regions: [
            {
                value: "Africa",
                text: "África",
            },
            {
                value: "Americas",
                text: "Americas",
            },
            {
                value: "Asia",
                text: "Asia",
            },
            {
                value: "Europe",
                text: "Europe",
            },
            {
                value: "Oceania",
                text: "Oceania",
            },
        ],
        countries: [],
        country: [],
    },
    actions: {
        // funciones asíncronas que puede llamar una o más mutaciones
        async getAllCountries({ commit }) {
            let response = await Services.getCountries()
            commit('SET_COUNTRIES', response.data)
        },
        async getDetail({commit}, alpha3Code){
            let response = await Services.getDetail(alpha3Code);
            commit('SET_COUNTRY_DETAIL', response.data)
        }
       
    },
    mutations: {
        // funciones síncronas para cambiar el estado e.j. put, edit, delete
        SET_COUNTRIES(state, payload) {
            state.countries = payload
        },
        SET_COUNTRY_DETAIL(state, payload){
            state.country = payload
        }
    },
    getters: {
        
    },
})

export default store