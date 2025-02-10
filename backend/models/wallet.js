import mongoose from "mongoose";
const WalletSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        default:0,
    },
    transactions:[
        {
            amount:Number,
            type:{
                type:String,
                enum:["credit","debit"]
            },
            date:{
                type:Date,
                default:Date.now
            },
        }
    ]
});
 export const Wallet=mongoose.model('Wallet',WalletSchema);