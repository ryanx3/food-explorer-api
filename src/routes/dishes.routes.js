const { Router } = require("express");
const dishesRouter = Router();

const uploadConfig = require("../configs/upload");
const multer = require("multer");

const DishesController = require("../controllers/DishesController");
const dishesController = new DishesController();
const FilesController = require("../controllers/FilesController");
const filesController = new FilesController();

const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

dishesRouter.use(ensureAuthenticated);

dishesRouter.post("/", dishesController.create);
dishesRouter.get("/:dish_id", dishesController.show);
dishesRouter.delete("/:dish_id", dishesController.delete);
dishesRouter.put("/:dish_id", dishesController.update);
dishesRouter.get("/", dishesController.index);
dishesRouter.patch(
  "/:dish_id/image",
  upload.single("image"),
  filesController.updateDishImage
);

module.exports = dishesRouter;
