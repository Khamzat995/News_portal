const { Router } = require("express");
const router = Router();

const {
  getCategory,
  getCategoryId,
  postCategory,
  patchCategory,
  deleteCategory,
} = require("../controllers/category");

router.get("/category", getCategory);
router.get("/category/:id", getCategoryId);
router.post("/category", postCategory);
router.patch("/category/:id", patchCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
