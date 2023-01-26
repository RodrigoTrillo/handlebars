const users = require('../users/controller.users')
const foods = require('../foods/controller.foods')
const products = require('../products/controller.products')


const router = (app)=>{
    app.use('/users', users)
    app.use('/products', products )
    app.use('/foods', foods)
    
}

module.exports = router