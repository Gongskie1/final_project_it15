const router = require("express").Router();
const student_controller = require("./controller/student_controller");



router.post("/create-students", student_controller.create_students);


module.exports = router;