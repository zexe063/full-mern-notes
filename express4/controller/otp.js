

const { model } = require("mongoose");
const nodemailer = require("nodemailer");


function randomotp(){
    let otp = '';
    let value = '1234567890';
    for(i=0;i<6; i++){
        otp = otp+value[Math.floor(Math.random()*value.length)]
    }
  return otp
}
const storedotp = randomotp()


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'hackx0315@gmail.com',
        pass: 'fagvjliorzivmbhg'
    }
});


const optsender = async(req,res)=>{
    
const info = await transporter.sendMail({
    from:"hackx0315@gmail.com",
    to:"murarisharma0315@gmail.com",
    subject:"otp for validation",
    tittle:"helo otp",
    text:"dear user your otp for next# is" +" "+ storedotp
})
if(info.messageId){
res.json({otp:"otp send sucesfully"+ storedotp})
}
}
module.exports = {optsender,storedotp}


