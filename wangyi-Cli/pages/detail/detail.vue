<template>
	<view class="detail">
		<view class="header">
			{{goodsObj.name}}
		</view>
		<scroll-view class="detailScroll" scroll-y="true" >
			<image :src="goodsObj.listPicUrl" mode=""></image>
			<view class="tag">
				{{goodsObj.promTag}}
			</view>
			<view class="price">
				￥{{goodsObj.retailPrice}}
			</view>
		</scroll-view>
		<!-- 底部 -->
		<view class="footer">
			<image src="/static/images/tabBar/tab-cart-current.png" mode=""></image>
			<view class="btn">
				立即购买
			</view>
			<view @click="addCart" class="btn cart">
				加入购物车
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goodsObj:{} //当前商品对象
			}
		},
		onLoad(options) {
			this.goodsObj=JSON.parse(options.goodsItem)
		},
		methods:{
			...mapMutations('cart',['addGoodsItem']),
			addCart(){
				this.addGoodsItem(this.goodsObj)
			}
		}
	}
</script>

<style lang="stylus">
	.detail
		.header
			height: 90rpx
			line-height: 90rpx
			width: 570rpx
			text-align: center
			margin: 0 auto
		.detailScroll
			height: calc(100vh - 90rpx)
			image 
				width: 100%
				height: 750rpx
			.tag
				width: 90%
				height: 100rpx
				line-height: 100rpx
				background-color: #bb2c08
				color: #fff
				margin: 20rpx auto
				font-size: 32rpx
				border-radius: 10rpx
				text-align: center
			.price
				font-size: 50rpx
				color: #dd1a21
				line-height: 70rpx
				margin-left: 5%

		.footer
			display: flex
			position: fixed
			bottom: 0
			left: 0
			right: 0
			height: 100rpx
			line-height: 100rpx
			border-top: 1px solid #ccc
			image 
				flex: 1
				width: 20rpx
				height: 90rpx
				margin: 10rpx 40rpx
			.btn
				flex: 2
				border-left: 1px solid #ccc
				text-align: center
				&.cart 
					background-color: red
					color: #fff
</style>
