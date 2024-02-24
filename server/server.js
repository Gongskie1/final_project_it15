require('dotenv').config();
const express = require("express")
const socketIo = require("socket.io")
const http = require("http")
const app = express()
const server = http.createServer(app);
const {check, sequelize} = require("./src/common/DB/connection");
const student = require("./src/user/student/Student");
const createStudent = require("./src/user/user_register/route");
const bodyParser = require("body-parser");
const io = socketIo(server,{ 
    cors: {
      origin: `http://localhost:5173`
    }
})

app.use(bodyParser.json());
app.use(createStudent);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("hello", "hello client");

  socket.on("server", (message) => {
    console.log(message);
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