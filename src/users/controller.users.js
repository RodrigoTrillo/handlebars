const { Router } = require('express')
const UserManager = require('../dao/user.manager')
const User = new UserManager()

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()

    const response = users.map(({ _id, name, lastname }) => ({
      id: _id,
      name,
      lastname
    }))

    res.json({ message: response })
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, lastname } = req.body

    const newUser = {
      name,
      lastname
    }

    await User.create(newUser)

    res.status(201).json('Usuario creado')
  } catch (error) {
    console.log(error)
  }
})

router.delete('/', async (req, res) => {
  await User.deleteMany()

  res.json({ message: 'usuarios eliminados' })
})

module.exports = router