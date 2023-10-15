




const { json } = require("body-parser");
const express = require("express");

const fs = require("fs");
const { Agent, ServerResponse } = require("http");
const server = express();
const morgan = require("morgan");

const jsondata = JSON.parse(fs.readFileSync("./data.json","utf-8"));
const product = jsondata.products;




server.use(express.static('public'))
server.use(express.json())


// server.use((req,res,next)=>{
//      console.log(req.get("User-Agent"), req.ip, req.method, new Date(),req.hostname)
//      next()
// })


// server.use(morgan('default'))

const auth = ((req,res,next)=>{
   if(req.query.password == 123){
  next()
   }

   else{
     res.send("unauthorised")
   }
})



server.get("/product",auth,(req,res)=>{
   
// res.json({"type":"GET"})  
res.json(jsondata)
})



server.post("/",auth,(req,res)=>{
    res.json({"type": "POST"})
})

server.put("/",(req,res)=>{
    res.json({"type": "PUT"})
})

server.delete("/",(req,res)=>{
    res.json({"type": "DELETE"})
})

server.patch("/",(req,res)=>{
    res.json({"type": "PATCH"})
})


server.get("/demo", (req,res)=>{
    // res.status(202).send("hello wolrd express")
   
    // res.headersSent("content-Type", "application/json")
    res.json(jsondata)
    
    // res.sendFile('C:\Users\zexe0\OneDrive\Desktop\mern full by coderdost\index.html')

})

server.listen(9090, function(){
    console.log("express server is started")
})