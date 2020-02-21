/*
 * @Description:api controller
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-21 14:08:48
 * @LastEditTime: 2020-02-21 14:21:41
 */
module.exports = {
    async getTest(ctx, next) {
        let { url, query, querystring } = ctx
        next()
        console.log(new Date().getTime())
        ctx.body = {
            url, query, querystring
        }
    },

    async timeOut(ctx, next) {
        console.log(new Date().getTime())
        setTimeout(() => {

        }, 3000)
    }
}
