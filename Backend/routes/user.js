import  express  from "express";
import { GetContact, PostContact, getUser, logout,login, myProfile, updateUser, postexperience, addProject,deleteProject } from "../controller/user.js";

import { isAuthenticated } from "../middlewares/auth.js";



export const  userRouter = express.Router()


userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/getUser").get(getUser);
userRouter.route("/me").get(isAuthenticated,myProfile);
userRouter.route("/admin/update").put(isAuthenticated,updateUser);
userRouter.route("/Contact").post(PostContact);
userRouter.route("/getcontact").get(GetContact);
userRouter.route("/admin/experience").post(isAuthenticated,postexperience);
userRouter.route("/admin/project/add").post(isAuthenticated,addProject);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProject)