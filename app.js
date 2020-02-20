const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
    ctx.body = 'hello koa'
})

app.listen(3000,() => {
    console.log(`koa server is running at http://localhost:3000`)
})