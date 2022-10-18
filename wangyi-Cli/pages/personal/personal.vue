<template>
	<view class="personal">
		<view class="header">
			<!-- 登录状态 -->
			<template v-if="userInfo.nickName">
				<image class="img" :src="userInfo.avatarUrl" mode=""></image>
				<text >{{userInfo.nickName}}</text>
				<button class="exit" @click="exit">退出登录</button>
			</template>
			<!-- 未登录 -->
			<template v-else>
					<image class="img" src="../../static/images/personal/personal.png" mode=""></image>
					<text class="login" @click="toLogin">去登录</text>
			</template>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				userInfo:{}, //个人信息
			};
		},
		mounted(){
			wx.getStorage({
				key: 'userInfo',
				success: res =>{
					if(res.data){
						this.userInfo=JSON.parse(res.data)
					}
				}
			}),
			wx.login({
				success:async res => {
					if(res.code) {
						let code = res.code
						const token = await request('/getOpenId',{code})
						console.log(token);
					} else {
						console.log('登录失败！'+res.errMsg);
					}
				}
			})
		},
		methods:{
			toLogin(){
				// 关闭所有页面,跳转到登录页面
				wx.reLaunch({
					url:'/pages/login/login'
				})
			},
			exit(){
				wx.setStorage({
					key: "userInfo",
					data: ''
				})
				wx.reLaunch({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.personal
		.header
			height: 300rpx
			line-height: 300rpx
			background-color: #eed7b5
			display: flex
			.img
				height: 100rpx
				width 100rpx
				vertical-align: middle
				margin: 90rpx 40rpx
			.exit
				height: 80rpx
				vertical-align: center
				text-align: middle
				margin: 100rpx 40rpx
</style>
