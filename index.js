const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

require('./src/database')

require('./src/routes')(app)

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port: ${process.env.PORT || 3000}`))