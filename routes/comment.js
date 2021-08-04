const { Router } = require("express");
const router = Router();

const {
  getCommentsId,
  postComments,
  patchComments,
  deleteComments,
} = require("../controllers/comment");

router.get("/comment/:id", getCommentsId);
router.post("/comment/:id", postComments);
router.patch("/comment/:id", patchComments);
router.delete("/comment/:id", deleteComments);

module.exports = router;
