const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  teacherID: {
    // type: mongoose.Schema.ObjectId,
    // ref: "Courses",
    type: String,
  },
  lessonName: {
    type: String,
  },
  chapters: {
    type: String,
  },
  description: {
    type: String,
  },
  topic: {
    type: String,
  },
  addNote: {
    type: String,
  },
});

module.exports = mongoose.model("Lessons", lessonSchema);
