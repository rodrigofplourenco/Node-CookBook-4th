const fs = require('fs').promises
const path = require('path')

const filePath = path.join(process.cwd(), 'hello.txt')

async function main() {
  try {
    const content = await fs.readFile(filePath, 'utf8')

    console.log('File content', content)
  }
  catch (err) {
    console.error(err)
  }
}

main()
