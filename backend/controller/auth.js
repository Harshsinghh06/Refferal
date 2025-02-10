
import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import { Wallet } from "../models/wallet.js";
import jwt from "jsonwebtoken";
export const register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Something is missing",
                success:true
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exist with this email",
                success:false,
            })
        }
        const newUser=await User.create({
            name,
            email,
            password
        })
        const newWallet =await Wallet.create({
            user:newUser._id,
            balance:0
        });

        return res.status(201).json({
            message:"Account created successfully",
            success:true,
            referralCode:newUser.referralCode,
            walletbalance:newWallet.balance
        })
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"somethis is missing",
                success:false
            })
        }
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Incorrect email",
                success:false
            })
        }
        const ispassword=await bcrypt.compare(password,user.password);
        if(!ispassword){
            return res.status(400).json({
                message:"Incorrect password",
                success:false
            })
        }
        const tokenData={
            userId:user._id
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
        user={
            _id:user._id,
            name:user.name,
            email:user.email,
            referralCode:user.referralCode
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            message:`welcome back ${user.name}`,
            user,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}
  export const logout=async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}