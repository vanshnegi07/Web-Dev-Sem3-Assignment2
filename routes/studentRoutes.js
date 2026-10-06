const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students - view all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - view a single student by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// POST /students - create a new student
router.post("/", (req, res) => {
  const { name, course } = req.body || {};

  if (!name || !course) {
    return res.status(400).json({ message: "Name and course are required" });
  }

  const newId =
    students.length > 0 ? students[students.length - 1].id + 1 : 1;

  const newStudent = { id: newId, name, course };
  students.push(newStudent);

  res.status(201).json(newStudent);
});

// PUT /students/:id - update an existing student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, course } = req.body || {};

  if (!name && !course) {
    return res
      .status(400)
      .json({ message: "Provide at least a name or course to update" });
  }

  if (name) student.name = name;
  if (course) student.course = course;

  res.status(200).json(student);
});

// DELETE /students/:id - remove a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const [deleted] = students.splice(index, 1);

  res.status(200).json({ message: "Student deleted successfully", student: deleted });
});

module.exports = router;
