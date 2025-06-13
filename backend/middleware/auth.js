const ErrorHandler = require('../utils/ErrorHandler')
const jwt = require("jsonwebtoken")
const catchAsyncErrors = require('./catchAsyncError')
const User = require('../Model/user')

exports.isAuthenticated = async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("please login to contact"))
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET)
req.user = await User.findById(decode.id)
next()

}
