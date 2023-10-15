



const http = require("http");
const fs = require("fs");




const data = fs.readFileSync("./index.html", "utf-8")

const datajson = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
// const data1 = JSON.parse(datajson);
const product = datajson.products


const server = http.createServer((req,res)=>{
   
if(req.url =="/"){
    res.setHeader("content-Type", "text/html")
    res.end(data)

}
else if(req.url=="/api"){
    res.setHeader("content-Type", "application/json")
  res.end(JSON.stringify(datajson));

}

// else if(req.url=="/products"){
//   const index= data.replace("**tittle**", product.title)
//   res.end(index)
// }

else if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    

    const products = product.find((item)=>{
     return item.id === +id
   
    })

    res.setHeader("content-Type", "text/html")

    res.end(data.replace("**tittle**", products.title).replace("url", products.thumbnail))


}

else{
res.setHeader("content-Type", "text/html")
fs.readFile("./pagefound.html", "utf-8", (err,data)=>{
    res.end(data);
})
}


   })








server.listen(3030)