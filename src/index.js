const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const api = require('./routes')

// Right to connect to MongoDB first then open Port.

mongoose.connect("mongodb://localhost:27017/store")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

const app = express()
app.use(express.json())

app.use('/', api)

app.listen(port, () => {
    console.log(`Online store app is connected at ${port}`)
})