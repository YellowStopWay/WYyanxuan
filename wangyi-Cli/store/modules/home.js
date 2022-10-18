import request from '../../utils/request.js'
const state = {
	test:'测试数据',
	indexData : {},
}

const mutations = {
	//修改首页数据
	changeIndexData(state,indexData){
		state.indexData = indexData;
		
	}
}

const actions = {
	async getIndexData({commit}){
		const res = await request('/getIndexData') //小程序
		// const res = await request('/api/getIndexData') //h5 
		console.log(res);
		commit('changeIndexData',res.indexData);
	},
}

const getters = {
	
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}