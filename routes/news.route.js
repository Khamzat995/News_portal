const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");
const { postImg } = require("../controllers/uploads.controller");

const router = Router();


router.get("/", newsController.allNews);
router.get("/:id", newsController.getNewsId);
router.get("/:id/news", newsController.getNewsCat);
router.get("/category/:id", newsController.getNewsCategoryById);
router.post("/", newsController.createNews);
router.patch("/:id", newsController.editNews);
router.delete("/:id", newsController.removeNews);

router.post("/uploads", postImg);

module.exports = router;
