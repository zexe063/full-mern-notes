


const express = require("express");
const userRouter = express.Router();


const{readusers,readusers2, createuser,upadteuser,patchuser, deleteuser} = require("../controller/user")

// read api /
userRouter.get("/",readusers)

// read api/product:id//
.get("/:id", readusers2)


// create 



.put("/:id", upadteuser)

.delete("/:id",deleteuser)

.patch("/:id",patchuser);

module.exports = userRouter;