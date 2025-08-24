import { clerkClient } from "@clerk/express";

export const protectAdmin = async(req,res, next)=>{
    try {
        const {userId}= req.auth();

        const user =  await clerkClient.users.getUser(userId);
//below !user || this is chat grp generated so dont trust it 
        if(user.privateMetadata.role !== 'admin'){
            return res.json({success: false, message: "not authorised" })
        }

        next();


    } catch (error) {
        // below line also 
        console.error("Admin middleware error:", error);
        return res.json({success: false, message: "not authorised" })
    }
}

