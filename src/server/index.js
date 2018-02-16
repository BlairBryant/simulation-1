const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3500
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})