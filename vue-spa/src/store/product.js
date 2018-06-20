import products from '../api/products.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store ({
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  actions: {
    load({ commit }, id) {
      products.asyncFind(id, detail => {
        commit('set', { detail })
      })
    },
    destroy({ commit }) {
      commit('clear')
    }
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail
    },
    clear(state) {
      state.detail = {}
    }
  }
})
export default store
