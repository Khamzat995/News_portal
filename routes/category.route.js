const { Router } = require("express");
const { categoriesController } = require("../controllers/category.controller");

const router = Router();

router.get("/", categoriesController.allCategory);
router.get("/:id", categoriesController.getCategoryById);
router.post("/", categoriesController.createCategory);
router.patch("/:id", categoriesController.editCategory);
router.delete("/:id", categoriesController.removeCategory);

module.exports = router;
