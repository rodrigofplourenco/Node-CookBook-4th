import fs from 'fs'
import http from 'http'
import path from 'path'
import formidable from 'formidable'

const form = fs.readFileSync(path.join(process.cwd(), 'public', 'form.html'))

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
  if (!/multipart\/form-data/.test(req.headers["content-type"])) {
    return error(415, res)
  }

  const form = formidable({
    multiples: true,
    uploadDir: './uploads'
  })

  form.parse(req, (err, fields, files) => {
    if (err) return err

    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(JSON.stringify({ fields, files }))
  })
}

function error(code, res) {
  res.statusCode = code
  res.end(http.STATUS_CODES[code])
}