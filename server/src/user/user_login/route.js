const router = require("express").Router();
const students_login  = require("./controller/student_login");

router.post("/students-login", students_login.login_students);

module.exports = router