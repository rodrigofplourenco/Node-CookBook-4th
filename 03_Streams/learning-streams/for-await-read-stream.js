const fs = require('fs')

const rs = fs.createReadStream('./file.txt')

async function main() {
  for await (const chunk of rs) {
    console.log('Read chunk:', chunk)
  }

  console.log('No more data')
}

main()
