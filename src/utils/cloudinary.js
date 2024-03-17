import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"
import { exit } from "process";

dotenv.config({
    path: "./.env"
})

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log('localFilePath',localFilePath)
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        // console.log('you are in catch',error.message);
        // exit.process(1);
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export { uploadOnCloudinary }
