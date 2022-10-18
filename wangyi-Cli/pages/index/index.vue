<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuotianchong"></text>
				<input type="text" placeholder="搜索..." placeholder-class="placeholder">
			</view>
			<button type="default">李峥李峥</button>
		</view>
		<!-- 滑块 -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex='true' v-if="indexData.kingKongModule">
			<view class='navItem' :class="{active:navIndex === -1}" @click="changeIndex(-1,-1)">推荐</view>
			<view class='navItem' :class="{active:navIndex === index}" @click="changeIndex(index,item.L1Id)"  v-for="(item,index) in indexData.kingKongModule.kingKongList" :key='item.L1Id'>{{item.text}}</view>
		</scroll-view>
		
		<!-- 内容区 -->
		<scroll-view scroll-y="true" >
			<Recommend v-if="navIndex === -1"></Recommend>
			<CateList v-else :L1Id='L1Id'></CateList>
		</scroll-view>
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import Recommend from '../../components/Recommend/Recommend.vue'
	import CateList from '../../components/CateList/CateList.vue'
	// vuex
	import {mapActions,mapState} from "vuex"
	export default {
		components: {
			Recommend,
			CateList
		},
		data() {
			return {
				navIndex:-1,
				L1Id:-1
			}
		},
		mounted(){
			console.log(this.$store.state.home.test)
			// this.$store.dispatch('home/getIndexData')
			this.getIndexData();
		},
		computed:{
			...mapState('home',['indexData'])
		},
		
		methods: {
			...mapActions('home',['getIndexData']),
			//点击切换下标
			changeIndex(index,L1Id){
				this.navIndex = index;
				this.L1Id = L1Id
			}
		}
	}
</script>

<style lang='stylus'>
	.indexContainer
		.header
			display flex
			padding 10rpx 5rpx
			.logo
				width 140rpx
				height 40rpx
				margin-top: 10rpx
			.search
				width 420rpx
				height 60rpx
				background: #f5f5f5
				position: relative
				input
					width 360rpx
					height 60rpx
					margin-left: 60rpx
					.placeholder
						font-size: 26rpx
						color: #333
				.iconfont
					position: absolute
					left: 10rpx
					top: 10rpx
					font-size: 40rpx
			button 
				width: 144rpx
				height: 60rpx
				line-height: 60rpx
				text-align: center
				font-size: 26rpx
				padding: 0 4rpx
			
		.navScroll
			display: flex
			height: 80rpx
			white-space: nowrap
			.navItem
				display: inline-block
				height: 40rpx
				padding: 10rpx
				font-size: 26rpx
				&.active 
					border-bottom 3rpx solid #BB2C08 
					color #BB2C08
</style>
