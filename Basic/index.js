// function solve() {
//   console.log("async funct");
// }
// function solve2() {
//   console.log("async 2 funct");
// }
// console.log("hello Everyone");
// setTimeout(solve, 1000);
// setTimeout(() => console.log("async 2 funct"), 99);
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// function asyncfun(duration) {
//   const p = new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
//   return p;
// }
// asyncfun(4000).then((resolve) => console.log("async func"));

// function asyncfun(duration) {
//   const p = new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//     //resolve("this is asyncfunc");
//   });
//   console.log(p);
//   return p;
// }
// asyncfun(5000).then(function (resolve) {
//   console.log("this is async");
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  // console.log(req.body);
  res.send("Hello world");
});
let courses = [{ id: 1, name: "course1" }];
app.post("/ap", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  console.log(req.body);
  res.send(courses);
});
app.get("/ap", (req, res) => {
  res.send(courses);
});
app.listen(3000, console.log("Connected to 3000 port.."));
