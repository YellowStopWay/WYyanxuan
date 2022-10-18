const express = require('express')
//创建服务器
const app = express();
//引入router
const router = require('./router/index');

app.use('/',router)

app.listen(8877,(res, req)=>{
	console.log('服务器开启成功，运行在8877端口');
	console.log('http://localhost:8877');
})