const { Router } = require("express");
const router = Router();

router.use('/news', require('./news.route'));
router.use('/comment', require('./comment.route'));
router.use('/category', require('./category.route'));

module.exports = router;




