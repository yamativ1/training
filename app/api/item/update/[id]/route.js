// app\api\item\update\[id]\route.js

import { NextResponse } from "next/server"
import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"

export async function PUT(request, context) {
    const reqBody = await request.json()
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        if(singleItem.email === reqBody.email){
            await ItemModel.updateOne({_id: context.params.id}, reqBody)
            return NextResponse.json({message: "Sccuess Item Change"})
        }else{
            return NextResponse.json({message: "It's Not Your Item"})
        }
    }catch(err){
        return NextResponse.json({message: "Failed Item Change"})       
    }
}