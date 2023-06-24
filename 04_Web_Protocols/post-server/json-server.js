const http = require('http')
const fs = require('fs')
const path = require('path')

const form = fs.readFileSync(path.join(__dirname, 'public', 'form.html'))

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      return get(res)
    }

    if (req.method === 'POST') {
      return post(req, res)
    }

    error(405, res)
  })
  .listen(3000)

function get(res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  })
  res.end(form)
}

function post(req, res) {
  if (req.headers["content-type"] !== 'application/json') {
    return error(415, res)
  }

  let input = ''

  req.on('data', (chunk) => {
    input += chunk.toString()
  })

  req.on('end', () => {
    const parsed = JSON.parse(input)

    if (parsed.err) {
      return error(400, "Bad Request", res)
    }

    console.log("Received data:", parsed)

    res.end(JSON.stringify({
      data: parsed
    }))
  })
}

function error(code, res) {
  res.statusCode = code
  res.end(http.STATUS_CODES[code])
}