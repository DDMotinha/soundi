const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const {
    estilosController,
    festasController
} = require('./src/controller/api.controller')

app.use('/static', express.static(path.join(__dirname, './public')))

app.get( '/', async (req, res ,next) =>{
    res.sendFile(path.join(__dirname, './src/view/index.html'))
})

app.get('/api/estilos', async (req, res, next) =>{
    await estilosController(req, res, next)
})

app.get('/api/festas', async (req, res, next) =>{
    await festasController(req, res, next)
})

app.listen(port, ()=>{
    console.log('Server started!')
})