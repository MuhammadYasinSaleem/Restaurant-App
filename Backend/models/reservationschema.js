import mongoose from "mongoose";
import validator from "validator";

const reservationschema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name should be at least 3 characters "],
        maxLength:[30,"First name should be less than 30 characters "]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name should be at least 3 characters "],
        maxLength:[30,"Last name should be less than 30 characters "]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain 11 numbers"],
        maxLength:[11,"Phone number must contain 11 numbers"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})

export const Reservation=mongoose.model('Reservation',reservationschema) ;