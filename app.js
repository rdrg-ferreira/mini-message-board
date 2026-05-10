const express = require('express');
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.get("/new", (req, res) => {
    res.render("new", { message: "EJS rocks again!" });
})

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening on port ${PORT}!`);
});