const { Router } = require('express')
const Product = require('../dao/models/products.models')
const FilesManager = require('../dao/files.manager')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()

    res.json({ message: products })

  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const productsManager = new FilesManager('products.json')
    const products = await productsManager.loadItems()

    await Product.insertMany(products)

    res.json({ message: 'Productos cargados' })
  } catch (error) {
    console.log(error)
  }
})

router.delete('/', async (req, res) => {
  await Product.deleteMany()

  res.json({ message: 'Productos eliminados' })
})

module.exports = router