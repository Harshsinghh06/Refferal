import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    referralCode:{
        type:String,
        unique:true
    },
});

UserSchema.pre('save',async function(next){
    if(this.isNew){
        this.referralCode=Math.random().toString(36).substring(2,8).toUpperCase();
    }
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
});

export const User=mongoose.model('User',UserSchema);