import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import walletRoute from "./routes/wallet.js"
import connectDB from "./util/db.js";


dotenv.config({});
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
 const corsOption={
    origin:'http://localhost:5173',
    credentials:true
 }
app.use(cors(corsOption));
const PORT=process.env.PORT||3000;

app.use("/api/v1/user",authRoute);
app.use("/api/v1/wallet",walletRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at PORT ${PORT}`);
})