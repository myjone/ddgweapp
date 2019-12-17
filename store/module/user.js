export default {
	state: {
		user:{
			avatar:'',
			inviteCode:'',
			nickname:'',
		}
	},
	
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		ADDUser:(state,user)=>{
			 state.user = user
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		addUser:({commit},user)=>{
				return commit('ADDUser',user)
		}
	},
	//获取vux里面的内容
	getters:{
		getUser:(state)=>state.user
	}
} 