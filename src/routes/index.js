const usersController = require('../users/controller.users')
const productsController = require('../products/controller.products')
const chatController = require('../views/controller.views')

const router = (app) => {
  app.use('/users', usersController)
  app.use('/products', productsController)
  app.use('/chat', chatController)
}

module.exports = router