import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log('connectionInstance',connectionInstance.connection)
        // console.log(`MONGODB Connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB Connection Failed ", error)
        process.exit(1)
    }
}

export default connectDB