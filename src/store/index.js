import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import getters from './getters';
import actions from './actions';
Vue.use(Vuex)
const store = new Vuex.Store({
  modules,
  getters,
  actions
})
export default store
