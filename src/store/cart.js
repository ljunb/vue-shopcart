/* eslint-disable */
import request from '../api/request';

const state = {
  cartList: [],
};

const getters = {
  list: state => state.cartList,

  totalPrice: (state) => {
    return state.cartList.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  },

  incrementBtnDisabled: state => id => {
    const fruit = state.cartList.find(item => item.id === id);
    return fruit.inventory === fruit.count;
  },

  decrementBtnDisabled: state => id => {
    const fruit = state.cartList.find(item => item.id === id);
    return !fruit.count;
  },
};

const actions = {
  async fetchListData({ commit }) {
    const result = await request();
    commit('setupCartList', result);
  },
  addFruit({ state, commit }, fruit) {
    const addedFruit = state.cartList.find(item => item.id === fruit.id);
    if (addedFruit) {
      commit('incrementFruitCount', { id: addedFruit.id });
    } else {
      commit('addFruitToCart', fruit);
    }
  },
  removeFruit({ commit }, fruit) {
    commit('decrementFruitCount', fruit);
  },
  delFruit({ commit }, fruit) {
    commit('deleteFruit', fruit);
  },
  addAll({ commit }) {
    commit('addAllFruits');
  },
};

const mutations = {
  setupCartList: (state, list) => {
    state.cartList = list;
  },
  addFruitToCart: (state, fruit) => {
    state.cartList.push({
      count: 1,
      ...fruit,
    });
  },
  decrementFruitCount: (state, fruit) => {
    const addedFruit = state.cartList.find(item => item.id === fruit.id);
    if (addedFruit.count > 0) addedFruit.count--;
  },
  incrementFruitCount: (state, { id }) => {
    const fruit = state.cartList.find(item => item.id === id);
    if (fruit.inventory > fruit.count) fruit.count++;
  },
  deleteFruit: (state, { id }) => {
    const fruit = state.cartList.find(item => item.id === id);
    fruit.count = 0;
  },
  addAllFruits: state => {
    state.cartList.map(item => {
      item.count = item.inventory;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
