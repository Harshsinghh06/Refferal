import { Wallet } from "../models/wallet.js";
import { User } from "../models/user.js";
export const getLeaders = async (req,res)=>{
    try {
        // Fetch all wallets and calculate the count of credit transactions for each user
        const leaderboard = await Wallet.aggregate([
            {
                $addFields: {
                    totalCreditAmount: {
                        $sum: {
                            $map: {
                                input: { $ifNull: ["$transactions", []] }, // Ensure transactions is an array
                                as: "transaction",
                                in: {
                                    $cond: {
                                        if: { $eq: ["$$transaction.type", "credit"] },
                                        then: "$$transaction.amount",
                                        else: 0
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                $sort: { totalCreditAmount: -1 } 
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            {
                $unwind: "$userDetails"
            },
            {
                $project: {
                    _id: 0,
                    userId: "$userDetails._id",
                    name: "$userDetails.name",
                    email: "$userDetails.email",
                    totalCreditAmount: 1
                }
            }
        ]);
        
        

        res.status(200).json({ success: true, leaderboard });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}