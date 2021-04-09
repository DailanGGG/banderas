import Vue from 'vue'
import Vuex from 'vuex'
import Flag from './modules/flags/store'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        flag: Flag
    }
})
export default store