/* eslint-disable */

const state = {
  account: '',
  password: '',
};

const getters = {
  account: state => state.account,
  password: state => state.password,
  canLogin: (state) => state.account !== '' && state.password !== '',
};

const actions = {

};

const mutations = {
  updateAccount: (state, newAccount) => state.account = newAccount,

  updatePassword: (state, newPassword) => state.password = newPassword,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
