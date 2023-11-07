const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// newsController.show
router.use("/:slug", newsController.show);

// newsController.index
// cần để tuyến này ở dưới cùng vì nó sẽ đọc từ trên xuống dưới
router.use("/", newsController.index);

module.exports = router;
