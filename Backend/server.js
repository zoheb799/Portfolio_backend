import { app } from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary"
import { connectDatabase } from "./config/database.js";
 dotenv.config({ path:"./backend/config/config.env"});

 connectDatabase();

 cloudinary.v2.config({
   cloud_name:process.env.CLOUDINARY_CLOUDNAME,
   api_key: process.env.API_KEY,
   api_secret:  process.env.API_SECRET,
 })
 app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port:${process.env.PORT}`);
 });