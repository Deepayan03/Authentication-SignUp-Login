const mongoose=require("mongoose");
const JWT=require("jsonwebtoken");
const bcrypt=require("bcrypt");
require('dotenv').config();
const {Schema}=mongoose;
const userSchema = new Schema(
    {
      name: {
        type: String,
        require: [true, 'user name is Required'],
        minLength: [5, 'Name must be at least 5 characters'],
        maxLength: [50, 'Name must be less than 50 characters'],
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'user email is required'],
        unique: true,
        lowercase: true,
        unique: [true, 'already registered'],
      },
      password: {
        type: String,
        select: false,
      },
      forgotPasswordToken: {
        type: String,
      },
      forgotPasswordExpiryDate: {
        type: Date,
      },
    },
    { timestamps: true }
  );

  userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      this.password = await bcrypt.hash(this.password, 10);
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
userSchema.methods={
  jwttoken(){
    return JWT.sign({id:this._id,email:this.email},process.env.SECRET||secret,{expiresIn:"24h"})
  }
}
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
