const {Router} = require('express')
const uploader = require('../utils')

const router= Router()

const users = [
    {
        name:'john',
        lastname:'doe',
        age:30,
        email:'john@doe.com',
        phone:2345678
    },
    {
        name:'jane',
        lastname:'doe',
        age:28,
        email:'jane@doe.com',
        phone:233345678
    },
    {
        name:'juan',
        lastname:'Perez',
        age:30,
        email:'juan@perez.com',
        phone:234567822133
    }
]

const anUser = {
        name:'Mate',
        lastname:'Perez',
        age:10,
        email:'mate@perez.com',
        phone:23456227822133
}

router.get('/', (req,res)=>{
    const random = Math.floor(Math.random()*users.length)
    res.render('users.handlebars',{user: users[random]})
})

router.post('/',uploader.single('file'),(req, res)=>{
    if(!req.file){
        return res.status(400).json({message:'No se almaceno'})
    }

    const {name, country}= req.body

    const user ={
        name,
        country
    }

    user.profile= req.file.path

    user.push(users)

    res.json({message: 'Usuario Creado'})
})

module.exports =router