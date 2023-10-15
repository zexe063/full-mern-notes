


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/eccomerce").then(()=>{
    console.log("databse is connected")
}).catch(()=>{
    console.log("erro please write code properly")
})


const productSchema = new mongoose.Schema({
 
    title: String,
    price: {type:Number, required:true, min:[0, "wrong input"], max: [2000,"wrong input"]},
    rating: String,
    thumbnail:String

})


const userschema = new mongoose.Schema({
  firstName:{type:String, unique:true},

  lastName:String,
  age:Number,
  gender:String,
  email:String,
  password:String,
  token:String
   
})  

exports.userdata = mongoose.model("user", userschema);

// const data = mongoose.model("product", productSchema);
exports.data = mongoose.model("product", productSchema);

