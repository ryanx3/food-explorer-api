const { Router } = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

function myMiddleware(req, res, next) {
  console.log(req.body)
  next();
}

usersRouter.use(myMiddleware);
usersRouter.post("/", usersController.create);
usersRouter.put("/:id", usersController.update);

module.exports = usersRouter  