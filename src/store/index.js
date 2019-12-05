import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    updateBeers(state, data) {
      state.beers = data.data;
    }
  },
  actions: {
    async getBeers(store) {
      const response = await fetch("http://localhost:8080/beers.json");
      const json = await response.json();
      store.commit("updateBeers", json);
    }
  },
  modules: {}
});
