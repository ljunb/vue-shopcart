import Vuex from 'vuex';
import Vue from 'vue';
import cart from './cart';
import login from './login';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    login,
  },
});

export default store;
