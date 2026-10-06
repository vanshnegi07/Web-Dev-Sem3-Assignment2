# Student Management REST API — Assignment 2

Web Dev III (Node.js & Express Backend) — Unit 2 

## Overview
A RESTful API built with **Node.js + Express** to perform CRUD operations on student
records. Data is stored **in memory** in a plain JS array (no MongoDB, MySQL, or
Mongoose used — per assignment restrictions).

## Project Structure
```
student-management-api/
├── app.js                 # Express server entry point
├── package.json
├── routes/
│   └── studentRoutes.js   # Modular router: all /students endpoints
├── middleware/
│   └── logger.js          # Custom logger middleware
└── data/
    └── students.js        # In-memory student data (array)
```

## Setup
```bash
npm install
npm start
```
Server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description               | Success | Error(s)          |
|--------|------------------|----------------------------|---------|--------------------|
| GET    | /students        | Get all students           | 200     | —                  |
| GET    | /students/:id    | Get a student by ID        | 200     | 400, 404           |
| POST   | /students        | Create a new student       | 201     | 400                |
| PUT    | /students/:id    | Update a student           | 200     | 400, 404           |
| DELETE | /students/:id    | Delete a student           | 200     | 400, 404           |

**POST/PUT body example (JSON):**
```json
{
  "name": "Sneha",
  "course": "BCA"
}
```

## Testing in Postman
1. Start the server (`npm start`).
2. Open Postman → set base URL to `http://localhost:3000`.
3. Test each endpoint above:
   - **GET** `/students` → returns the full list.
   - **GET** `/students/1` → returns Rahul's record.
   - **POST** `/students` with a JSON body → creates a new student, returns `201`.
   - **PUT** `/students/1` with a JSON body → updates Rahul, returns `200`.
   - **DELETE** `/students/1` → removes Rahul, returns `200`.
   - Try a bad ID (e.g. `/students/abc`) → `400 Bad Request`.
   - Try a missing ID (e.g. `/students/999`) → `404 Not Found`.
4. Save the collection / take screenshots as your instructor requires.

## Pushing to GitHub (Assignment 2 folder)
From inside your existing Web Dev III / Backend Development repo (the same one
used for Assignment 1):

```bash
cd path/to/your-repo
mkdir "Assignment 2"
# copy all the files from this project into that new "Assignment 2" folder
git add "Assignment 2"
git commit -m "Add Assignment 2 - Student Management REST API"
git push origin main
```

Then submit the **GitHub repo link** via the submission form, and write **NA**
in the host link field (as instructed).
