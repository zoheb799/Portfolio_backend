import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({

name: {
    type: String,
    
    required: [true, "Please Enter name"],
  },
  email: {
    type: String,
    
    required: [true, "Please Enter Email"],
  },
  message: {
    type:String,
    required:[true,"please write your message"]

  }
  
});

export const Contact = mongoose.model("Contact", ContactSchema);
