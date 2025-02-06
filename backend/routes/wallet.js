import express from "express";
import { getWalletBalance,withdraw,creditReferrerWallet} from "../controller/wallet.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
 const router=express.Router();
 router.get("/balance",authMiddleware,getWalletBalance);
 router.post("/withdraw",authMiddleware,withdraw);
 router.post("credit",authMiddleware,creditReferrerWallet);
 export default router;