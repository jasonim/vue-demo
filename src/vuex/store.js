import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  'headerTitle': '福利',
  'loadingShow': true
}

// const actions = {
//   UPDATE_TIME: ({ commit }) => commit('UPDATE_TIME'),
//   UPDATE_LOADING: ({ commit }) => commit('UPDATE_LOADING')
// }

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_TIME (state, title) {
      state.headerTitle = title
    },
    UPDATE_LOADING (state, data) {
      state.loadingShow = data
    }
  },
  actions,
  getters
})
