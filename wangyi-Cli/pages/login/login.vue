<template>
	<view><button @click="getUser">登录</button></view>
</template>

<script>
export default {
	data() {
		return {		

		};
	},
	methods:{
		getUser(){
			wx.getUserProfile({
				desc: '用于完善会员资料',
				success: res => {
					//存储用户信息
					wx.setStorage({
						key: "userInfo",
						data: JSON.stringify(res.userInfo)
					})
					//页面跳转回到个人信息
					wx.reLaunch({
						url: '/pages/personal/personal'
					})
				}
			})
			
		}
	},
}
</script>

<style lang="stylus">

</style>
