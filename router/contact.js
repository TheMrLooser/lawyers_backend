const express = require("express");
const { CreateContact, GetContacts } = require("../controler/contact");
const { wrapRequestHendler } = require("../utils");

const contactRouter = express.Router();

contactRouter.post("/create-contact", wrapRequestHendler(CreateContact));
contactRouter.get("/get-contacts", wrapRequestHendler(GetContacts));
module.exports = { contactRouter };
