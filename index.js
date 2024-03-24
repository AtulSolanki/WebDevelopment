const express = require("express");

// const sum = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };

// const app = express();

// app.get("/", (req, res) => {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send(ans.toString());
// });

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

const app = express();
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.use(express.json());
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  if (!isThereUnhealthyKidneys()) {
    res.status(411).json({
      msg: "no unHealthy Kidney",
    });
    return;
  }
  newArray = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy)
      newArray.push({
        healthy: true,
      });
  }
  users[0].kidneys = newArray;
  res.json({});
});

const isThereUnhealthyKidneys = () => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) return true;
  }
  return false;
};
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
