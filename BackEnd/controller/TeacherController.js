const Course = require("../models/TeacherCourseModel");
const Lesson = require("../models/TeacherLessonModel");

exports.createCourse = async (req, res) => {
  const newCourse = new Course({
    teacherID: req.body.teacherID,
    subject: req.body.subject,
    title: req.body.title,
    numberOfChapters: req.body.numberOfChapters,
    progress: req.body.progress,
    lessons: req.body.lessons,
  });

  await newCourse
    .save(newCourse)
    .then(res.send({ message: "Success" }))
    .catch((err) => {
      res.send(err);
    });
};
exports.createLesson = async (req, res) => {
  const newLesson = new Lesson({
    teacherID: req.body.teacherID,
    lessonName: req.body.lessonName,
    chapters: req.body.chapters,
    topic: req.body.topic,
    addNote: req.body.addNote,
  });

  await newLesson
    .save(newLesson)
    .then(res.send({ message: "Success" }))
    .catch((err) => {
      res.send(err);
    });
};

exports.getCourse = async (req, res) => {
  await Course.find().then((data) => {
    res.send(data);
  });
};
exports.getLesson = async (req, res) => {
  await Lesson.find().then((data) => {
    res.send(data);
  });
};

exports.deleteLesson = async (req, res) => {
  const id = req.params.id;
  await Lesson.findByIdAndDelete(id).then(res.send({ message: "Success" }));
};
