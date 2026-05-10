const express = require('express');
const path = require("node:path");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`App listening on port ${PORT}!`);
});