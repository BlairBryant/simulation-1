const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.get(`/api/bins/:id`, ctrl.getBins)
app.get(`/api/bin/:id`, ctrl.getBinData)
app.delete(`/api/bin/:id`, ctrl.deleteBin)



const port = process.env.PORT || 3500
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})