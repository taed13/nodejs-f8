const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// siteController.show
router.use("/:slug", siteController.search);

// siteController.index
// cần để tuyến này ở dưới cùng vì nó sẽ đọc từ trên xuống dưới
router.use("/", siteController.index);

module.exports = router;
