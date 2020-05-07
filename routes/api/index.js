const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");


router.use("/books", bookRoutes);
router.use("/googlebooks",googleRoutes);
module.exports = router;
