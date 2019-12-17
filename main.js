import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import {
	axios
} from './utils/request.js'
//全局自定义全页面loading配置
function showLoading(){
	store.commit('show_full_loading')
}
function hideLoading(){
	store.commit('hide_full_loading')
}
Vue.prototype.$store = store
Vue.prototype.$showLoading = showLoading
Vue.prototype.$axios = axios
Vue.prototype.$hideLoading = hideLoading
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
