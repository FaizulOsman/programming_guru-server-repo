const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || "5000";

app.use(cors());

const courses = require("./data/courses.json");
const faqData = require("./data/faqData.json");
const blogData = require("./data/blogData.json");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find((c) => c.id === id);
  res.send(course);
});

app.get("/faq", (req, res) => {
  res.send(faqData);
});

app.get("/blog", (req, res) => {
  res.send(blogData);
});

app.listen(port, () => {
  console.log("Programming Guru server comes form: ", port);
});
