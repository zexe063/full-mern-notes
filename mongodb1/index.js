
const express = require("express")
const server = express();
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/dice").then(()=>{
    console.log("databse is connected")
}).catch(()=>{
    console.log("erro please write code properly")
})
const data = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,

});

const user = new mongoose.model("user", data);

async function databasecreate(){
    const user1 = new user({
        id: 30,
          title: "Key Holder",
          description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
          price: 30,
          discountPercentage: 2.92,
          rating: 4.92,
          stock: 54,
          brand: "Golden",
          category: "home-decoration"
    })

    const result = await user.insertOne(user1);
}


// databasecreate()

async function updatedabase(){
 const result =  await user.find({id:30})
 console.log(result)
}
// updatedabase()


server.listen(1200, ()=>{
    console.log("server is  started")
})