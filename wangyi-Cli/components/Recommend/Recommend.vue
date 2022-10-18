<template>
	<view class="recommend">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/static-union/1664518786c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/static-union/1664357328c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/static-union/1664246011dc59e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/b8f70140fe34cc1b90ad700c102bb7f8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a3db71c0455725232c62b67649fa0055.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/static-union/1664357328c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 三个小图标 -->
		<view class="policyList">
			<view class="policyItem" v-for="item in indexData.policyDescList" :key="item.desc">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		<!-- 10个导航 -->
		<view class="kingkongList" v-if="indexData.kingKongModule" >
			<view class="kingkongItem" v-for="item in indexData.kingKongModule.kingKongList":key="item.L1Id" enable-flex>
				<image class="kingkongImg" :src="item.picUrl" mode=""></image>
				<view class="kingkongDesc">
					{{item.text}}
				</view>
			</view>
		</view>
		<!-- 分类区 -->
		<view class="categoryList">
			<view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
				<!-- 大图 -->
				<image class="categoryImg" :src="item.titlePicUrl" mode=""></image>
				<!-- 滑块 -->
				<scroll-view class="categoryScroll" scroll-x="true" enable-flex >
					<view class="goodsItem" v-for="goodsItem in item.itemList" :key="goodsItem.id">
						<image class="goodsImg" :src="goodsItem.showPicUrl" mode=""></image>
						<view  class="goodsText">
							{{goodsItem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:'Recommend',
		data() {
			return {
				
			};
		},
		computed:{
			...mapState({
				indexData:state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus">
	.recommend
		.swiper
			height: 350rpx
			image 
				width: 100%
				height: 350rpx
		.policyList
			display: flex
			margin: 10rpx 0
			.policyItem
				flex: 1
				text-align: center
				image 
					height: 40rpx
					width: 40rpx
					vertical-align: middle
				text
					font-size: 24rpx
		.kingkongList
			display: flex
			flex-wrap: wrap
			.kingkongItem
				text-align: center
				width: 20%
				margin: 10rpx 0 
				.kingkongImg
					width: 100rpx
					height: 100rpx
				.kingkongDesc
					font-size: 24rpx
		.categoryList
			.categoryItem
				margin: 10rpx 0
				.categoryImg
					height: 370rpx
					width: 100%
				.categoryScroll
					height: 300rpx
					display: flex
					.goodsItem
						height: 300rpx
						margin: 0 8rpx
						.goodsImg
							background-color: #f5f5f5
							height: 200rpx
							width: 200rpx
						.goodsText
							font-size: 26rpx
							white-space: pre-wrap
							overflow: hidden
							text-overflow: ellipsis
							display: -webkit-box
							-webkit-box-orient: vertical
							-webkit-line-clamp:2
</style>