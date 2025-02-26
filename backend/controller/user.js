const express = require("express");
const { upload } = require("../multer");
const User = require("../Model/user");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const ErrorHandler = require("../utils/Error"); // Make sure this is correctly implemented

router.post("/create", upload.single("profilePic"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
      // Delete uploaded file if user already exists
      if (req.file) {
        const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      return next(new ErrorHandler("User already exists", 400));
    }

    // Ensure profile picture exists
    if (!req.file) {
      return next(new ErrorHandler("Profile picture is required", 400));
    }

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password,
      avatar: {
        url: `/uploads/${req.file.filename}`, // Save the file path
        id: req.file.filename, // Optionally save the file name
      },
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
    console.log(newUser);
  } catch (error) {
    console.error(error.message);
    next(new ErrorHandler("Something went wrong", 500));
  }
});

router.post('/login',async(req,res,next)=>{
  try{
const {email,password}=req.body
if(!email || !password)
  return next(new ErrorHandler("all fields are required"))
const user= await User.findOne({email}).select(password)
if(!user)
  return next (new ErrorHandler("user dosent exist",400))
// const validPassword= User.comparePassword(password)
// if(!validPassword)
//   return next(new ErrorHandler("data wrong",400))
res.status(200).json({message:"success",user})
}
catch(e){
  return next(new ErrorHandler(e.message,500))
}
})



module.exports = router;
