const { createReadStream } = require('fs')

//const stream = createReadStream('temp.txt', { encoding: 'utf8' })
const stream = createReadStream('temp.txt', { highWaterMark: 64})

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
