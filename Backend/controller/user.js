import { User } from "../model/user.js";
import { Contact } from "../model/contact.js";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {

  try {

    res.status(200).cookie("token", null, {
      expires: new Date(Date.now()),
    }).json({
      success: true,
      message: "logged out successfully",
    })

  } catch {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const getUser = async (req, res) => {
  try {

    const user = await User.findOne().select("-password -email");
    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    })


  }
}

export const myProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    })


  }
}

export const PostContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(422).json({ err: "blanks cannot be empty" });
    }
    const contact = new Contact({ name, email, message });
    contact.save().then(() => {
      res.status(201).json({ message: "message sent successfully" });
    }).catch((err) => response.status(500).json({ err }));

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
};
export const GetContact = async (req, res) => {
  Contact.find()
    .then((contact) => {

      res.json(contact);
    }).catch(err => { console.log({ err: "error hai yaaro" }); });
}

// export const Experience = async (req,res) => {
//     try {
//         const {companyname, position, duration,description} = req.body;
//         if (!companyname || !position || !duration || !description ) {
//             return res.status(422).json({ err: "Experience blacks cannot be empty" });
//         }
//         const experience = new Experience({companyname, position, duration,description});
//         experience.save().then(() => {
//             res.status(201).json({ message: "Experience Added Successfully" });
//         }).catch((err) => response.status(500).json({ err }));

//     } catch (error){
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//      });
//     }
// };

// export const GETExperience = async (req,res) => {
//     Experience.find().sort('_id', -1)
// .then((experience) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//           res.json(experience);
//       }).catch(err => { console.log({ err: "error hai yaaro" }); });
// };


export const updateUser = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    const { name, email, password, skills, about } = req.body;
    if (name) {
      user.name = name;
    } if (email) {
      user.email = email;
    } if (password) {
      user.password = password
    }
    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: 'skillset',
        });

        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }

      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: 'skillset',
        });

        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: 'skillset',
        });

        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: 'skillset',
        });

        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: 'skillset',
        });

        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: 'skillset',
        });

        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image7) {
        await cloudinary.v2.uploader.destroy(user.skills.image7.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image7, {
          folder: 'skillset',
        });

        user.skills.image8 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image8) {
        await cloudinary.v2.uploader.destroy(user.skills.image8.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image8, {
          folder: 'skillset',
        });

        user.skills.image8 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image9) {
        await cloudinary.v2.uploader.destroy(user.skills.image9.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image9, {
          folder: 'skillset',
        });

        user.skills.image9 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
      if (skills.image10) {
        await cloudinary.v2.uploader.destroy(user.skills.image10.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image10, {
          folder: 'skillset',
        });

        user.skills.image10 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }
      }
    }

    if (about) {
      user.about.name = about.name;
      user.about.title = about.title;
      user.about.subtitle = about.subtitle;
      user.about.description = about.description;
      user.about.resume = about.resume;
      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: 'about_portfolio',
        });
        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        }

      }
    }
    await user.save();
    res.status(200).json({
      success: true,
      message: "user updated successfully",
    });

  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });


  }
}




export const postexperience = async (req, res) => {
  try {
    const { companyname, position, duration, description } = req.body;
    const user = await User.findById(req.user._id);
    user.experience.unshift({
      companyname, position, duration, description,
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "experience added",
     
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const { url, title, image, description, techStack } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });
    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const project = user.projects.find((item) => item._id == id);

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};




