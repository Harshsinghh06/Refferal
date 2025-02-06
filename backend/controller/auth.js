
import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
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
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            message:"Account created successfully",
            success:true,
            referralCode:newUser.referralCode
        })
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const payload = { id: user._id };
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
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