// app\api\item\delete\[id]\route.js

import { NextResponse } from "next/server"
import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"

export async function DELETE(request, context) {
    const reqBody = await request.json()
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        if(singleItem.email === reqBody.email){
            await ItemModel.deleteOne({_id: context.params.id})
            return NextResponse.json({message: "Successfully Deleted Item"}) 
        }else{
            return NextResponse.json({message: "It's Not Your Item"})
        }  
    }catch(err){
        return NextResponse.json({message: "Failed Deleted Item"})
    }
}