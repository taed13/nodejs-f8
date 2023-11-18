const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

// newsController.show
router.get("/:slug", courseController.show);

module.exports = router;
