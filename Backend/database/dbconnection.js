import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"RESTAURANT"}).then(()=>{
        console.log("connected successfully");
    }).catch((err)=>{
        console.log(`error occured in database connection ${err}`);
        
    })
}