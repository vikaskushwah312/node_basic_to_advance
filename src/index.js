import dotenv from "dotenv"
import express from "express"
import connectDB from  "./db/database.js"
import { app } from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runing at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Error", error)
})




// DB Connect code
/*
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {DB_NAME} from "./constants.js"

dotenv.config({
    path: './.env'
})

const app =  express()

;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR ",error)
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`); 
        })

    } catch(error) {
        console.error("error", error);
        throw error
    }
})()
 */