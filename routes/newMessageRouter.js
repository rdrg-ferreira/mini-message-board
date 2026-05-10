const { Router } = require("express");
const { getNewMessageForm, createMessage } = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", getNewMessageForm);
newMessageRouter.post("/", createMessage);

module.exports = newMessageRouter;