const { Router } = require("express");
const { commentsController } = require("../controllers/comment.controller");

const router = Router();

router.get("/:id", commentsController.getCommentsId);
router.post("/:id", commentsController.createComments);
router.patch("/:id", commentsController.editComments);
router.delete("/:id", commentsController.removeComments);

module.exports = router;
