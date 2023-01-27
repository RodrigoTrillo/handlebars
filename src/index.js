const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./routes')
const {Server} = require('socket.io')
const port = 3000

const app = express()

 const httpServer = app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})

const socketServer = new Server(httpServer)

app.engine('handlebars', handlebars.engine())

app.set('views', __dirname + '/views')

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

socketServer.on('connection',socket =>{
    console.log('Nuevo cliente conectado')
})


router(app)
