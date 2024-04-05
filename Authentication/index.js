// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(usernames, passwords) {
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username == usernames &&
//       ALL_USERS[i].password == passwords
//     )
//       return true;
//   }
//   return false;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.body.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     res.json({ ALL_USERS });
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("port 3000 started");
// });

//Monogodb
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://atulsinghsolanki99:bYQncwPgvZlk7USA@cluster0.srxkg8w.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Atul Solanki",
  email: "atul@gmail.com",
  password: "12345",
});
user.save().then(() => console.log("mongoose it is "));
