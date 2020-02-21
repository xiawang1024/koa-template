/*
 * @Description: router api
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2020-02-21 10:38:20
 * @LastEditTime: 2020-02-21 14:12:03
 */

const router = require('koa-router')()
const { getTest } = require('../controller/api')

router.get('/get', getTest)

module.exports = router