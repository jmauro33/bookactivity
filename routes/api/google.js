const router = require("express").Router();
const googleController = require("../../controllers/googleController");


router.route("/")
  .get(googleController.findBooks)
//   .post(googleController.create);


// router
//   .route("/:id")
//   .get(googleController.findById)
//   .put(googleController.update)
//   .delete(googleController.remove);

module.exports = router