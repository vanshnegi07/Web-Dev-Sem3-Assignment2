// In-memory "database" — a plain JS array holding student records as JSON objects.
// No MongoDB / MySQL / Mongoose used, as required by the assignment restrictions.

let students = [
  { id: 1, name: "Rahul", course: "BCA" },
  { id: 2, name: "Priya", course: "BTech" },
  { id: 3, name: "Amit", course: "BCA" }
];

module.exports = students;
