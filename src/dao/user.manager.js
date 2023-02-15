const Usuarios = require("./models/users.model");

class UserManager {
  async find() {
    try {
      const users = await Usuarios.find()
      return users
    } catch (error) {
      console.log(error)
    }
  }

  async create(newUser) {
    try {
      await Usuarios.create(newUser)

      return 'Nuevo usuario creado'
    } catch (error) {
      console.log(error)
    }
  }

  async deleteMany() {
    try {
      await Usuarios.deleteMany()

      return 'Usuarios eliminados'
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserManager