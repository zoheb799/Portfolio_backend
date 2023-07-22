import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },

  skills: {
    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
    image7: {
      public_id: String,
      url: String,
    },
    image8: {
      public_id: String,
      url: String,
    },
    image9: {
      public_id: String,
      url: String,
    },
    image10: {
      public_id: String,
      url: String,
    },
  },


  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    resume: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
  experience : [{
    companyname : String,
    position: String,
    duration:String,
    description :String
  },
] ,
});

export const User = mongoose.model("User", userSchema);
