const express = require("express");
const logger = require("./logger");
const app = express();
const port = 3000;
app.use(express.json());

const users = [
  { username: "admin123", password: "admin123", role: "admin" },
  { username: "admin234", password: "admin234", role: "admin" },
  { username: "user123", password: "user123", role: "user" },
  { username: "user678", password: "user678", role: "user" },
];
let currentUser = null;

const checkAdmin = (req, res, next) => {
  let { admin } = req.query;
  admin = currentUser;
  if (admin.role !== "admin") {
    return res.status(403).send("Access Denied");
  }
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("ברוכים הבאים לדף הבית!");
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username == username && u.password == password
  );
  if (user) {
    currentUser = user;
    res
      .status(200)
      .send(`User ${username} logged in successfully. as ${user.role}`);
  } else {
    res.status(401).send("Invalid username or password");
  }
});

app.get("/public", (req, res) => {
  res.send("זהו דף ציבורי.");
});

app.get("/admin", checkAdmin, (req, res) => {
  res.send("ברוכים הבאים לעמוד הניהול!");
});

app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
