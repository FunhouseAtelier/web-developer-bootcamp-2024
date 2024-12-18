const express = require('express')
const app = express()

app.use(() => {
  console.log('WE GOT A NEW REQUEST!!')
})

app.listen(8080, () => {
  console.log('LISTENING ON PORT 8080!')
})
