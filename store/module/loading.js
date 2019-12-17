export default {
	state: {
		loading:false,
	},
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		show_full_loading(state){
			state.loading = true
		},
		hide_full_loading(state){
			state.loading = true
		},
		
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		
	},
	//获取vux里面的内容
	getters:{
		getFullLoading:(state)=>state.loading
	}
} 