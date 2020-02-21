/*
 * @Description: koa.js app
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-21 09:40:43
 * @LastEditTime: 2020-02-21 15:05:17
 */
const Koa = require('koa')
const app = new Koa()
const path = require('path')



/**
 * 加载路由
 */
const router = require('./router/index')
app.use(router.routes(), router.allowedMethods())

/**
 * 挂载静态资源
 */
const compress = require('koa-compress') /**开启gzip */
app.use(compress())
const serve = require('koa-static')

app.use(serve(path.join(__dirname, './static')), {/* options */ })


app.use(async ctx => {
    ctx.body = 'hello koa'
})

app.listen(3000, () => {
    console.log(`koa server is running at http://localhost:3000`)
})