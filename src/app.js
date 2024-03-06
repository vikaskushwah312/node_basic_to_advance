import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app  = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//parses incoming request bodies with JSON payloads
app.use(express.json({ limit: "16kb"}))

//To get the url in coded form (Browser url)
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
//to load the public folder
app.use(express.static("public"))

//to performa the curd for secure browser cookie
// It extracts the cookies and attaches them to the request object as req.cookies.
app.use(cookieParser())

export {app}