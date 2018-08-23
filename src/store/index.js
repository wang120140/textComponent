import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './Mutation.js'
import State from './State.js'
import Actions from './Action.js'

Vue.use(Vuex);

var store = {
  state:State,
  mutations:Mutations,
  actions:Actions

}

export default new Vuex.Store(store);
