const router = require("express").Router();

const {
  createCourse,
  createLesson,
  getCourse,
  getLesson,
  deleteLesson,
} = require("../controller/TeacherController");

router.route("/createCourse").post(createCourse);
router.route("/createLesson").post(createLesson);
router.route("/getCourse").get(getCourse);
router.route("/getLesson").get(getLesson);

router.route("/deleteLesson/:id").delete(deleteLesson);

module.exports = router;
