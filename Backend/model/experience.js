import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
 companyname:String,
 position:String,
 duration:String,
 description:String
  
});

export const Experience = mongoose.model("Experience", ExperienceSchema);
