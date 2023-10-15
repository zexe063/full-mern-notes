
const EventEmitter = require("events");

const fs = require("fs");

const rr = fs.createReadStream('./data.json');
rr.on('data',(data)=>{
    console.log({data});
})

rr.on('end', (data)=>{
    console.log({data})
})

// const em =  new EventEmitter();
// em.on('demo', (data)=>{
//   console.log("hleo wolrd",{data})
// })

// em.emit('demo',{name:'murari'});