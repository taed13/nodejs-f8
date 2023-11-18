const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/:slug
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongooseToObject(course),
        });
      })
      .catch((err) => {
        res.status(404).json({ err: "NOT FOUND" });
      });
  }
}

module.exports = new CourseController();
