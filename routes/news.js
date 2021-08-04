const { Router } = require("express");
const router = Router();

const { postImg } = require("../controllers/uploads");



const {
  getNews,
  getNewsId,
  getNewsCat,
  postNews,
  patchNews,
  deleteNews,
  getNewsCategoryById,
} = require("../controllers/news");

router.get("/news", getNews);
router.get("/news/:id", getNewsId);
router.get("/category/:id/news", getNewsCat);
router.get("/news/category/:id", getNewsCategoryById);
router.post("/news", postNews);
router.patch("/news/:id", patchNews);
router.delete("/news/:id", deleteNews);

router.post("/uploads", postImg);

module.exports = router;
