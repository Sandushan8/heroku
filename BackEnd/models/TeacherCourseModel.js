const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  teacherID: {
    // type: mongoose.Schema.ObjectId,
    // ref: "User",
    type: String,
  },
  subject: {
    type: String,
  },
  title: {
    type: String,
  },
  numberOfChapters: {
    type: String,
  },
  time: {
    type: String,
  },
  students: {
    type: String,
  },
  description: {
    type: String,
  },
  progress: {
    type: String,
  },
  lessons: {
    type: String,
  },

  //   [
  //     {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "Lessons",
  //     },
  //   ],
});

module.exports = mongoose.model("Courses", courseSchema);
