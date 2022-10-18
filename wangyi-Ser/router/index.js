const express = require('express')
//创建路由
const router = express.Router()
//引入fly库
var Fly = require('flyio/src/node')
var fly = new Fly;
//引入jwt
var jwt = require('jsonwebtoken')

router.get('/test',(req,res)=>{
	res.send('测试成功')
})

//加载首页分类数据——滑块
const indexData = require('../datas/index.json')
router.get('/getIndexData',(req,res)=>{
	res.send({
		status:200,
		indexData
	})
})

// 首页分类
const indexCateList = require('../datas/indexCateList.json')
router.get('/getIndexCateList',(req,res)=>{
	res.send({
		status:200,
		indexCateList
	})
})

// tabbar 分类
const categoryDatas = require('../datas/categoryDatas')
router.get('/getCategoryDatas',(req,res)=>{
	res.send({
		status:200,
		categoryDatas
	})
})

//获取用户唯一标识 openid
router.get('/getOpenId',async (req,res) => {
	//接受请求参数
	const code = req.query.code
	//整合数据对接微信服务器
	const appId = 'wx725e827743694f3d';
	const appSecret = 'cba84af91487592d349115ed159890ca';
	const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
	const result = await fly.get(url);
	const openId = JSON.parse(result.data).openid;
	//接受到微信服务器返回的openId，结合当前用户数据，加密生成token
	const info = {
		openId,
		name:'gyx',
		age:26
	}
	//加密
	var token = jwt.sign({foo: info}, 'shhhhh');
	console.log(token);
	//返回当前用户加密后的标识
	res.send({
		token
	})
})
module.exports = router