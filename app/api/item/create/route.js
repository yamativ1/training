// app/api/item/create/route.js

import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function POST(request) {
    const reqBody = await request.json()
    //console.log(reqBody) 

    try{
        await connectDB()
        await ItemModel.create(reqBody)
        return NextResponse.json({message: "Success Item Create"})
    }catch(err){
        return NextResponse.json({message: "Failed Item Create"})
    }
}
// mongodb+srv://yamativ:<db_password>@cluster0.93loh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//Z3@54BdL5N-zTui