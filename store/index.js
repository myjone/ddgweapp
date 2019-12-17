import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user';
import share from './module/share.js'
import search from './module/search.js'
import loading from "./module/loading.js"
import createPersistedState from 'vuex-persistedstate'
import {
	localStorage
} from 'mp-storage'
Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			storage: localStorage
		})
	],
	state: {
		//
	},
	mutations: {
		//
	},
	actions: {
		//
	},
	modules: {
		user,
		share,
		search,
		loading,
	}
})
