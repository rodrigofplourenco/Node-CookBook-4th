const fastify = require('fastify')()

const PORT = process.env.PORT || 3000

fastify.get('/', async (request, reply) => {
  return {
    message: 'Hello, world!'
  }
})

fastify.listen({
  port: PORT
}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening on ${address}`)
})
