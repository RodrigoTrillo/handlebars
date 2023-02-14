const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./routes')
const {Server} = require('socket.io')


const app = express()



const socketServer = new Server(httpServer)

app.engine('handlebars', handlebars.engine())

app.set('views', __dirname + '/views')

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

socketServer.on('connection',socket =>{
    console.log('Nuevo cliente conectado')
})


router(app)
