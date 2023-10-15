


const express = require("express");
const {createuser} = require("../controller/auth");
const {login} = require("../controller/auth");

const authRouter = express.Router();

authRouter.post("/", createuser)
authRouter.get("/", login)

module.exports = authRouter;