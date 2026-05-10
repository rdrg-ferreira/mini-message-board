const messages = require("../messages");

function getMessages(req, res) {
    res.render("index", { messages });
}

module.exports = { getMessages }