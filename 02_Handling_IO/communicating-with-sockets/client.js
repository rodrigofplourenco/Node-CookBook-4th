const net = require('net')

const HOSTNAME = 'localhost'
const PORT = 3000

const socket = net.connect(PORT, HOSTNAME)

process.stdin.on('data', (data) => {
  socket.write(data)
})

socket.on('data', (data) => {
  console.log(data.toString())
})