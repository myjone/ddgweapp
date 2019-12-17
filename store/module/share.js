
export default {
	state: {
		share:{
			goodsName:'',
			shareImage:'',
			goodsId:'',
		}
	},
	
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		CHANGEShARE:(state,share)=>{
			 state.share = share
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		changeShare:({commit},share)=>{
				return commit('CHANGEShARE',share)
		}
	},
	//获取vux里面的内容
	getters:{
		getShare:(state)=>state.share
	}
} 