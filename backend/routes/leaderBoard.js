import express from "express";
const router=express.Router();
import { getLeaders } from "../controller/leaderBoard.js";
router.get('/get-leader',getLeaders);
export default router