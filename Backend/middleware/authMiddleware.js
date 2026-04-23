import jwt from "jsonwebtoken"
import Company from "../models/Company.js"

import { clerkClient } from "@clerk/clerk-sdk-node";

export const protectUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({ success: false, message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];

    // verify clerk token
    const session = await clerkClient.verifyToken(token);

    req.auth = { userId: session.sub };  // ✅ IMPORTANT

    next();

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const protectCompany = async (req, res, next)=>{
    const token = req.headers.token

    if (!token) {
        return res.json({success:false, message:"Not authorized, login again"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}