const express = require('express');
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`App listening on port ${PORT}!`);
});