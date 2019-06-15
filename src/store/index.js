import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
    city:'武汉'
},
actions:{
 changeCity(ctx,city){    //ctx 上下文
   ctx.commit('changeCity',city)
 }   
},
mutations:{
    changeCity(state,city){
        state.city=city
    }
}

})