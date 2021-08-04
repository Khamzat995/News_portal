const { Router } = require("express");
const router = Router();

router.use(require("./news"));
router.use(require("./comment"));
router.use(require("./category"));


module.exports = router;
