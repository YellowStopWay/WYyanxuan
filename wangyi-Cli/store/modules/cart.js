import Vue from 'vue'
const state = {
	 cartList : [],
}

const mutations = {
	//添加商品
	addGoodsItem(state,goodsItem){
		//判断购物车里是否已经有该商品
		const item = state.cartList.find(item => item.id === goodsItem.id)
		//若有，则数量加一
		if(item){
			item.count += 1;
		}
		//若没有，则添加字段，并放入购物车数组
		else {
			Vue.set(goodsItem,'count',1);
			Vue.set(goodsItem,'isSelected',true);
			state.cartList.push(goodsItem);
		}
	},
	// 改变商品数量
	changCountNum(state,{index,num}) {
		if(num>0) {
			state.cartList[index].count += 1
		}else{
			if(state.cartList[index].count > 1) {
				state.cartList[index].count -= 1
			}
			else {
				wx.showModal({
					title: '提示',
					content:'您确定要删除该商品吗？',
					success(res) {
						if(res.confirm) {
							//确认删除
							state.cartList.splice(index,1)
						}
					}
				})
			}
		}
	},
	//改变选中状态
	changeGoodsIsSelected(state,index){
		state.cartList[index].isSelected = !state.cartList[index].isSelected
	},
	//修改所有商品的选中状态
	changeAllSelected(state,isAllSelected){
			state.cartList.forEach(item => item.isSelected = isAllSelected)
	}
}

const actions = {
	
}

const getters = {
	//是否全选中
	isAllSelected(state){
		return state.cartList.every(item => item.isSelected)
	},
	//计算被选中的商品的总数
	totalCount(state){
		return state.cartList.reduce((pre,item) => {
			return pre+=item.isSelected?item.count:0;
		},0)
	},
	//计算被选中的商品的总价
	totalPrice(state){
		return state.cartList.reduce((pre,item) => {
			return pre+=item.isSelected?(item.count*item.retailPrice):0;
		},0)
	}
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}