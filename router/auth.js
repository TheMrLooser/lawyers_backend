const express = require("express");
const { wrapRequestHendler } = require("../utils");
const { createAuth, matchAuth } = require("../controler/auth");

const authRouter = express.Router();

authRouter.post("/create-auth", wrapRequestHendler(createAuth));
authRouter.post("/", wrapRequestHendler(matchAuth));

module.exports = authRouter;
