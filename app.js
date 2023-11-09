require('dotenv').config
const express = require('express')
const app = express()

app.use('/images',express.static('public/images'))
app.use('/file',express.static('public/files'))

const mediaRouter = require('./router/media.routers')
app.use('/api/v1',mediaRouter)

const {PORT = 8080 } = process.env
app.listen(PORT,()=> console.log('listening on port ',PORT))