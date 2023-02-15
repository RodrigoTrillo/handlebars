const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./routes')
const {Server} = require('socket.io')
const {port}= require('./config')

const app = express()
const messages= []
app.use(express.json())

const httpServer = app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority', error => {
  if (error) {
    console.log(`Cannot connect to db. Error: ${error}`)
  }
})

const io  = new Server(httpServer)

app.engine('handlebars', handlebars.engine())

app.set('views', __dirname + '/views')

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

io.on('connection', socket =>{
    console.log(`New Client with id ${socket.id}`)

    socket.on('message', data =>{
        messages.push(data)
        io.emit("messageLogs", messages)
    })

    
    
})


router(app)
