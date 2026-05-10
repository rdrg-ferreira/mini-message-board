const messages = require("../messages");

function getNewMessageForm(req, res) {
    res.render("form");
}

function createMessage(req, res) {
    const { name, msg } = req.body;

    messages.push({ text: msg, user: name, added: new Date() });

    res.redirect("/");
}

module.exports = { getNewMessageForm, createMessage }