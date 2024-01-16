const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")
const { hash } = require("bcryptjs") 

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection()
    const userExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
    
    if(userExists) {
      throw new AppError("Este endereço de email já está cadastrado.", 409)
    }

    const hashedPassword = await hash(password, 8)

    database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])


    res.status(201).json("Usuário cadastrado!");
  }

}

module.exports = UsersController