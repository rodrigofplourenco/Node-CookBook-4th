function logger() {
  return async (ctx, next) => {
    console.log('Request received:', ctx.req.method, ctx.req.url)

    await next()
  }
}

module.exports = logger
