import Services from '../../../services'

export default{
     // funciones asíncronas que puede llamar una o más mutaciones
     async getAllCountries({ commit }) {
         console.log("GAT")
        let response = await Services.getCountries()
        commit('SET_COUNTRIES', response.data)
    },
    async getDetail({commit}, alpha3Code){
        let response = await Services.getDetail(alpha3Code);
        commit('SET_COUNTRY_DETAIL', response.data)
    } 
}