const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')

app.use('/shelter', shelterRoutes)
app.use('/dog', dogRoutes)

app.listen(3000, () => {
  console.log('Serving app on localhost:3000')
})
