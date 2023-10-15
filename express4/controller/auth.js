
const {userdata} = require("../module/productmodel")
const jwt = require("jsonwebtoken");
const fs = require('fs');
const path = require("path")
const bcrypt = require("bcryptjs");



const privatekey = fs.readFileSync(path.resolve(__dirname,"../private.key"), "utf-8");




const createuser = async(req,res)=>{
    var token = jwt.sign({email:req.body.email}, privatekey, {algorithm: 'RS256'})
    var hash = bcrypt.hashSync(req.body.password, 10);

     const user = new userdata({...req.body, token:token});
     user.password = hash;
 
     user.save();
     res.json(user);

    }

const login  = async(req,res)=>{
  const user = await userdata.findOne({email:req.body.email});

 const decoded =  bcrypt.compareSync(req.body.password, user.password);

if(decoded){
    const token = jwt.sign({email:req.body.email}, privatekey, {algorithm: 'RS256'})
   
  
user.token = token
user.save()
res.json({mes:"login successful"})


}

else{
    res.send("unathorised")
}

}


    module.exports = {createuser,login};
    // module.exports = createuser;