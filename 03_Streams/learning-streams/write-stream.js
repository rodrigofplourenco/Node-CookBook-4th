const fs = require('fs')

const file = fs.createWriteStream('./file.txt')

for (let i = 0; i <= 1000000; i++) {
  file.write('Node.JS is a javascript runtime built on Google Chrome\'s V8 JavaScript engine.\n')
}
