import {
	deteleObject
} from '@/utils/biz.js'
export default {
	state: {
		searchList: [],
	},

	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		CHANGSEARCHLIST: (state, searchInputValue) => {
			state.searchList.push(searchInputValue)
			state.searchList = deteleObject(state.searchList)

		},
		CLEARSEARCHELIST: (state, type) => {
			state.searchList = state.searchList.filter((item, i) => {
				return item.mallType != type;
			})
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		addSearchList: ({
			commit
		}, searchInputValue) => {
			return commit('CHANGSEARCHLIST', searchInputValue)
		},
		deleteSearchList: ({
			commit
		}, type) => {
			return commit('CLEARSEARCHELIST', type)
		},
	},
	//获取vux里面的内容
	getters: {
		getSearchList: (state) => state.searchList
	}
}
