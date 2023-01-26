const {Router} = require('express')

const router= Router()

const food = [
    {
        name:'Hamburguesa',
        price:100,
    },
    {
        name:'Banana',
        price:20,
    },
    {
        name:'Soda',
        price:40,
    },
    {
        name:'Ensalada',
        price:120,
    },
    {
        name:'Pizza',
        price:150,
    },
    
]

router.get('/', (req,res)=>{
    const user ={
        name:'Mate',
        lastName:'Naram',
        role:'admin'
    }
    res.render('index.handlebars',{
        user,
        isAdmin: user.role === 'admin',
        food,
        style:'index.css'
    })

})

module.exports =router