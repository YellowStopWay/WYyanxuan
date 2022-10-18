<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem" v-for="(item,index) in cartList" :key="item.id">
				<!-- 选择状态 -->
				<text class="iconfont icon-xuanzhong " @click="changeSelected(index)" :class="{selected:item.isSelected}"></text>
				<!-- 商品信息 -->
				<view class="goodsItem">
					<image :src="item.primaryPicUrl" mode=""></image>
					<view class="goodsInfo">
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">
							￥{{item.retailPrice}}
						</view>
					</view>
				</view>
				<!-- 数量控制 -->
				<view class="countCtrl">
					<text class="sub" @click="changeCount(index,-1)">-</text>
					<text class="count">{{item.count}}</text>
					<text class="add" @click="changeCount(index,1)">+</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="left">
				<text class="iconfont icon-xuanzhong" :class="{selected:isAllSelected}" @click="changeIsAllSelected(!isAllSelected)"></text>
				<text >已选 {{totalCount}}</text>
			</view>
			<view class="right">
				<text class="btn">合计: ￥ {{totalPrice}}</text>
				<text class="btn order">下单</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState({
				cartList:state => state.cart.cartList
			}),
			...mapGetters('cart',['isAllSelected','totalCount','totalPrice'])
		},
		methods:{
			...mapMutations('cart',['changCountNum','changeGoodsIsSelected','changeAllSelected']),
			changeCount(index,num){
				this.changCountNum({index,num})
			},
			changeSelected(index){
				this.changeGoodsIsSelected(index)
			},
			//全选全不选
			changeIsAllSelected(isAllSelected){
				this.changeAllSelected(isAllSelected)
			}
			
		}
	}
</script>

<style lang="stylus">
	.cart
		background-color: #f5f5f5
		.cartList
			.cartItem
				height: 172rpx
				width: 100%
				margin-top: 20rpx
				background-color: #fff
				padding: 20rpx
				display: flex
				position: relative
				overflow: hidden
				.iconfont
					font-size: 40rpx
					line-height: 172rpx
					&.selected
						color: red
				.goodsItem
					display: flex
					image 
						height: 172rpx
						width: 172rpx
						background-color: #ccc
						margin: 0 40rpx
					.goodsInfo
						.name
							font-size: 26rpx
							margin: 10rpx
						.price
							color: red
				.countCtrl
					position: absolute
					bottom: 30rpx
					right: 60rpx
					text
						border: 1px solid #ddd
						padding: 8rpx 28rpx
						&:nth-child(2)
							border: none
							border-top: 1px solid #ddd
							border-bottom: 1px solid #ddd
		.footer
			height: 80rpx
			line-height: 80rpx
			position: fixed
			bottom: 0
			left: 0
			right: 0
			display: flex
			text-align: center
			border-top: 1rpx solid #ccc
			.left
				flex: 1
				text-align: center
				width: 40rpx
				text
					margin-right: 10rpx
				.selected
					color: #dd1a21
			.right
				flex: 3
				position: relative
				.btn
					text-align: center
					position: absolute
					right: 36%
					&.order
						right: 0
						display: inline-block
						width: 34%
						background-color: red
						color: white

</style>
