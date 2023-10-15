
const express = require('express');
const ProductRouter = express.Router()
const{readproducts, readproductsaa, readproducts2,createProduct, createproductss, upadteProduct,patchProduct, deleteProduct} = require("../controller/product");

const data = require("../controller/otp")




// read api /


ProductRouter.get("/",readproducts)
.post("/signup", data.optsender)
.get("/aa", readproductsaa)
.get("/form", createproductss)

// read api/product:id//
.get("/:id", readproducts2)


// create 

.post("/", createProduct)

.put("/:id", upadteProduct)

.delete("/:id",deleteProduct)

.patch("/:id",patchProduct);


module.exports = ProductRouter;