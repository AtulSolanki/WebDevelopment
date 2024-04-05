const express = require("express");
const app = express();
const ticketCheckMiddleware = (req, res, next) => {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    const year = 14 - age;
    res.json({
      msg: `Your Age is less than 14. You can ride after ${year} year`,
    });
  }
};
app.use(ticketCheckMiddleware);
app.get("/ride1", (req, res) => {
  res.json({
    msg: "You can go to ride1",
  });
});
app.get("/ride2", (req, res) => {
  res.json({
    msg: "You can go to ride2",
  });
});
app.listen(3000, () => {
  console.log("connected to 3000");
});
