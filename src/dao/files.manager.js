const fs = require('fs')

class FilesManager {
  constructor(file) {
    this.file = `${process.cwd()}/src/files/${file}`
  }

  async loadItems() {
    if (fs.existsSync(this.file)) {
      const data = await fs.promises.readFile(this.file)
      const response = JSON.parse(data)
      return response
    }
    return 'No se encuentra el archivo'
  }
}

module.exports = FilesManager