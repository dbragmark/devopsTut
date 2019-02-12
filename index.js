const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const apiRoute = require('./apiRoute')

app.use(bodyParser());

// logger
router.get('/health', async ctx => {
  ctx.body = 'OK'
})

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})
app.use(apiRoute.routes())
app.use(apiRoute.allowedMethods())

const port = process.env.port || 3000
app.listen(port, () => {
  console.log(`We are now live on port ${port}`)
})
//app.listen(3000, () => {
//  console.log('We are now live on port 3000!')
})