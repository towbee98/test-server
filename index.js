const express= require("express");
const dotenv= require("dotenv");
const mongoose=require('mongoose')
const AccountModel= require('./accountModel');
const fs= require('fs');
dotenv.config()
const app = express();
const rawData=fs.readFileSync("MOCK_DATA.json",'utf-8')
const port = process.env.PORT || 3005;

app.use(express.json());

app.post('/register',async (req,res,next)=>{
    try{
        const {business_name,
            business_address,
              business_email, 
            business_phone_number, 
            business_category, 
            account_number,
             logo_image, 
            house_number, 
            street_number,
             city, 
            state,
             contact_name, 
            contact_phone_number,
             contact_email_address, 
            password,confirm_password}= req.body;
       const newAccount= await AccountModel.create({business_name,
            business_address,
              business_email, 
            business_phone_number, 
            business_category, 
            account_number,
             logo_image, 
            house_number, 
            street_number,
             city, 
            state,
             contact_name, 
            contact_phone_number,
             contact_email_address, 
            password,confirm_password})
        res.status(200).json({success: true,message:"Account created successfully"})
    }catch(err){
        next(err);
    }
    
})

app.post('/login',async(req,res,next)=>{
    try{ const {business_email,password}=req.body;
   const accountExist=await AccountModel.findOne({business_email})
   if(!accountExist) return next( new Error("Account not found"))
   if(accountExist.password != password)return next(new Error("Incorect login credentials"))
   res.status(200).json({success: true,message:"Login was successful"})
;
}catch(err){
        next(err);
    }
})

app.get("/verify",(req,res,next)=>{
try {
    const dummyData= JSON.parse(rawData)
    console.log(dummyData)
     res.status(200).json({success: true,message:"", data :dummyData})
} catch (error) {
    next(error);
}
})

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({success: false,message:err.message||"Internal Server error"})
})

const main = async()=>{
    app.listen(port,async()=>{
        await mongoose.connect(`${process.env.mongo_url}`)
        console.log("Connection has been established succesfully!");
        console.log("Server listening on port " + port);
    }); 
}

main()