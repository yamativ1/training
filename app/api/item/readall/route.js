// app/api/readall/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"


export async function GET() {
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({message: "Success Read Item ALL", allItems: allItems})
    }catch(err){
        return NextResponse.json({message: "Failed Read Item ALL"})
    }
}

export const revalidate = 0