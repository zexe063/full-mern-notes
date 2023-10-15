const fs =  require("fs");




// const datajson = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const user = datajson.users;

const {userdata} = require("../module/productmodel");
const { request } = require("http");




const readusers = async(req,res)=>{
    const readdata = await userdata.find()
    res.json(readdata)
}

// readproduct2
const readusers2 = async(req,res)=>{
    const id = req.params.id;
    const readdata = await userdata.findById(id)
    res.json(readdata)
    
    }

// createproduct
  


        // update
        const upadteuser = async(req,res)=>{
    const id = req.params.id;
    const updasteuser = await userdata.findByIdAndUpdate(id, {$set:req.body},{new:true})
    res.json(upadteuser);
   
 }

//  patch

const patchuser = (req,res)=>{
    const id = +req.params.id
    const productindex= user.findIndex((item)=>{
        return item.id === id
    });

    const data = user[productindex]
    user.splice(productindex,1,{...data , ...req.body});
 res.send("data has been patched succesfully")
}

// delete 


const deleteuser = async(req,res)=>{
    const id = req.params.id;
    const deletuser = await userdata.findByIdAndDelete(id);
    res.json("dat is deleted succesflly")
    

}


        
module.exports = {readusers,  readusers2,  upadteuser,  patchuser, deleteuser};