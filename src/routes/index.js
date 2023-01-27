const products = require('../products/controller.products')


const router = (app)=>{
   
    app.use('/products', products )
   
    
}

module.exports = router