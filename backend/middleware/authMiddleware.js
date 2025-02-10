import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
export const authMiddleware = async (req, res, next) => {
    const token =  req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token,process.env.SECRET_KEY);
      const user = await User.findById(decoded.userId);
   
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
  