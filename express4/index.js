
const express  = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require('./controller/otp')
const path = require("path");
const server = express();
const app = require('http').createServer(server);
const io = require('socket.io')(app);
const cors = require("cors");

server.use(cors());

const authRouter = require("./routes/auth")
const ProductRouter = require("./routes/route");
const userRouter = require("./routes/user");
const publickey = fs.readFileSync("./public.key", "utf-8");
const pathbulid = path.resolve(__dirname, "./build")

const auth = (req,res,next)=>{
    const token = req.get("Authorization").split("Bearer ")[1];
    const decoded = jwt.verify(token, publickey);
    if(decoded.email){
next()
    }
    else{
        res.senStatus(401);
    }
}


server.use(express.json());
server.use(express.urlencoded())
server.use("/signup", authRouter);
server.use("/login", authRouter);
server.use("/products", ProductRouter);
server.use("/user", auth, userRouter)

//HERE THE Socket IO//
io.on('connection', (socket)=>{
socket.on('msg',(data)=>{
    console.log(data)
})

socket.emit("send")
})
app.listen("8900", function(){
    console.log("server is started");
})



