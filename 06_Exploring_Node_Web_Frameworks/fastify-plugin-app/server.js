const fastify = require('fastify')()

const PORT = process.env.PORT || 3000

fastify.register(require('./plugins/hello-route'))

fastify.listen({
  port: PORT
}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening on ${address}`)
})
