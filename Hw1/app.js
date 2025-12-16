const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let html;
const Middleware1 = (req, res, next) => {
  html = "<H1> Hello1 </H1>  ";
  next();
};
const Middleware2 = (req, res, next) => {
  html += "<h2> Hello2  </h2>";
  next();
};
app.use([Middleware1, Middleware2]);

app.get("/users", (req, res) => {
  res.send(html + "<p> Users </p>");
});
app.get("/kuku", (req, res) => {
  res.send(html + "<p> Kuku </p>");
});

app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
