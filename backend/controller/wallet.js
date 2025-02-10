import { User } from "../models/user.js";
import { Wallet } from "../models/wallet.js";
export const getWalletBalance = async (req, res) => {
    try {
      const wallet = await Wallet.findOne({ user: req.user._id });
  
      if (!wallet) {
        return res.status(404).json({ message: 'Wallet not found' });
      }
  
      res.json({ balance: wallet.balance });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
 export const withdraw = async (req, res) => {
    const { amount } = req.body;
  
    try {
      const wallet = await Wallet.findOne({ user: req.user._id });
  
      if (!wallet) {
        return res.status(404).json({ message: 'Wallet not found' });
      }
  
      if (wallet.balance < amount) {
        return res.status(400).json({ message: 'Insufficient balance' });
      }
      wallet.balance -= amount;
      await wallet.save();
  
      res.json({ message: 'Withdrawal successful', balance: wallet.balance });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  export const creditReferrerWallet = async (req, res) => {
    const { referralCode, amount } = req.body;
  
    try {
      const referrer = await User.findOne({ referralCode });
  
      if (!referrer) {
        return res.status(400).json({ message: 'Invalid referral code' });
      }
      const wallet = await Wallet.findOneAndUpdate(
        { user: referrer._id },
        {
          $inc:{balance:amount},
          $push:{transactions:{amount,type:"credit"}}
        },
        {upsert:true,new:true}
      );
  
      res.json({ message: 'Wallet credited successfully', balance: wallet.balance });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  