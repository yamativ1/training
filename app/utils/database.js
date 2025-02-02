import mongoose from "mongoose"

const connectDB  = async() => {
    try{
        await mongoose.connect("mongodb+srv://yamativ1:IEzCMyvPxHhH8sSc@cluster0.ofyzw.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}
export default connectDB
//mongodb+srv://yamativ1:IEzCMyvPxHhH8sSc@cluster0.ofyzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://yamativ:Z3@54BdL5N-zTui@cluster0.93loh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://yamativ:MHptJVXdHwG.3mD@cluster0.93loh.mongodb.net/nxtAppDataBase?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://yamativ:<db_password>  @cluster0.93loh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://yamativ:MHptJVXdHwG.3mD@cluster0.93loh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//MHptJVXdHwG.3mD



//yamativ1//IEzCMyvPxHhH8sSc