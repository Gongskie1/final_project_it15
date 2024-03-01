require('dotenv').config();
const express = require("express")
const {Server} = require("socket.io")
const http = require("http")
const app = express()
const {check, sequelize} = require("./src/common/DB/connection");
const student = require("./src/user/student/Student");
const createStudent = require("./src/user/user_register/route");
const bodyParser = require("body-parser");
const studentLogin = require("./src/user/user_login/route");
const studentMessage = require("./src/message/route")
const cors = require("cors");

// ================================================
app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.json());
app.use(createStudent);
app.use(studentLogin);
app.use(studentMessage)

const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173"
  },
});
// ================================================
io.on("connection", (socket) => {

  console.log(socket.id)
  socket.on("fromClient", (message) => {
    console.log(message);
    socket.broadcast.emit("receive_message", message);
  });

  socket.on("join_room", (room)=>{
    socket.join(room)
    console.log(`student id join the room: ${room}`)
  });

  socket.on("disconnect", ()=>{
    console.log("user disconnected", socket.id)
  });
});

check();
sequelize
  .sync()
  .then(() => {
    console.log(student);
  })
  .catch((err) => {
    console.error("Sequelize Initialization threw an error:", err);
  });

server.listen(8080, () => {
  console.log(`listening on *:${8080}`);
});