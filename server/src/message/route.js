const router = require("express").Router();
const mess_controller = require("./controller/message")

router.get("/chat-page/friend/:id", mess_controller.message_to);
// router.post("")

module.exports = router