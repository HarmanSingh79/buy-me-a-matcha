"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectdb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    //fetch the secret of the user who is getting the payment
    let user=await User.findOne({username:to_username})
    const secret=user.razorpaySecret

    var instance = new Razorpay({ key_id: user.razorpayId, key_secret: secret })

    let options={
        amount: Number.parseInt(amount) * 100,
        currency:"INR"
    }
    
    let x=await instance.orders.create(options)

    await Payment.create({oid:x.id, amount:Number(amount), to_user:to_username, name:paymentform.name, message:paymentform.message})

    return x;
}

export const fetchuser=async(username)=>{
    await connectDB()
    let u=await User.findOne({username:username}).lean()
    if(!u) {
        return null
    }
    return JSON.parse(JSON.stringify(u))
}

export const fetchpayments=async(username)=>{
    await connectDB();
    let p=await Payment.find({to_user:username, done:true}).sort({amount:-1}).lean();
    // Sort by amount descending (handles both string and number types)
    p.sort((a, b) => Number(b.amount) - Number(a.amount));
    return JSON.parse(JSON.stringify(p))
}

export const updateProfile=async(data, oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data)

    //if the username is being updated, firstly check if that username is available or not
    if(oldusername!==ndata.username){
        let u=await User.findOne({username:ndata.username})
        if(u){
            return {error:"username already exists"}
        }
        await User.updateOne({email:ndata.email},ndata)
        //now update all the usernames in payments table
        await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})

    }else{
        await User.updateOne({email:ndata.email},ndata)
    }


    
}