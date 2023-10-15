const fs = require("fs");
const ejs = require("ejs")
const path = require('path');
const storedotp = require("./otp");
console.log(storedotp)



// const datajson = JSON.parse(fs.readFileSync("./data.json","utf-8"))
// const products = datajson.products;

const model = require("../module/productmodel");
const data = model.data;


const createproductss = (req,res)=>{
    ejs.renderFile(path.resolve(__dirname, '../pages/form.ejs'),(err,str)=>{
        res.send(str)
         })
 }


const readproductsaa = async(req,res)=>{

    const productfind=  await data.find()

 ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), {products:productfind},(err,str)=>{
res.send(str)
 })
 
 }

//  HERE THE ORIGINAL BACKEND LOGIC OF PRODUCTS//

  const readproducts = async(req,res)=>{



   
    const productfind=  await data.find().sort(req.query);
   res.json(productfind)


    
}

// readproduct2
const readproducts2 = async(req,res)=>{

const id = req.params.id;
const productfind = await data.findById(id)
res.json(productfind)

}
    

// createproduct
    const createProduct = async(req,res)=>{
 if(storedotp.storedotp === req.body.otp){
 const product =  await new data(req.body);
 product.save();
 res.json(product)
 }
 else{
   res.json({msg:'otp failed'})
 }


    }



        // update
     const upadteProduct = async(req,res)=>{
const id = req.params.id
const profuctpatch = await data.findByIdAndUpdate(id, {$set:req.body},{new:true})
res.json(profuctpatch)
 }

//  patch

const patchProduct = async(req,res)=>{
    const id = req.params.id;
   const productupdate = await data.findOneAndReplace({_id: id} ,req.body, {new:true});
res.json(productupdate)

}


// delete 


const deleteProduct = async(req,res)=>{
 const id = req.params.id

    const productdelete = await data.findByIdAndDelete(id);
    res.json(productdelete)
}


        
module.exports = {createProduct,createproductss,readproducts, readproductsaa, readproducts2, upadteProduct, patchProduct,deleteProduct};