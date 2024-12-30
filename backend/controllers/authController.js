import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import  Jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address ,answer} = req.body;

    if (!name || !email || !phone || !password || !address||!answer) {
      return res.send({ message: "Required blank" });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(200).send({
        success: false,
        message: "Already  registered please login",
      });

    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer
    }).save();
    res.status(200).send({
        success:true,
        message:"user resistered successfully",
        user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};


//POST LOGIN USER

export const loginController=async(req,res)=>{
 try {
    const {email,password}=req.body;

    //validation
    if(!email||!password){
        return res.status(404).send({
            success:false,
            message:"Invalid email or password",
        })
    }
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(404).send({
            success:false,
            message:"Email is not registered"
        })
    }
    const match=await comparePassword(password,user.password)
    if(!match){
        return res.status(200).send({
            success:false,
            message:'Invalid password'
        })
    }

    // token
    const token=Jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{expiresIn:"7d"});

    res.status(200).send({
        success:true,
        message:"logined successfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,

        },token
    })
 } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in login",
        error
    })
 }
}

//test controller
export const testController=(req,res)=>{
 try {
  res.send('protected route');
 } catch (error) {
  console.log(error);
  res.send({error})
 }
}

////get currentuserController
export const currentuserController=async(req,res)=>{
  try {
    
    const user = await userModel.findById(req.params.id);
    res.send({
      message:"success",
      user
    })
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ error: 'Server error' });
  }
}

//forgotPasswordController

export const forgotPasswordController=async(req,res)=>{
 try {
  const {email,answer,newpassword}=req.body;
  if(!email){
    res.status(400).send({
      message:"Email is required"
    })
  }
  if(!answer){
    res.status(400).send({
      message:"answer is required"
    })
  }
  if(!newpassword){
    res.status(400).send({
      message:"new Password is required"
    })
  }

  const user=await userModel.findOne({email,answer})

  if(!user){
    return  res.status(404).send({
      success:false,
      message:"wrong email or answer"
    })
  }
  const hashed=await hashPassword(newpassword)
  await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
    success:true,
    message:"password reset successful"
  })
 } catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:"hm something went wrong",
    error

  })
 }
}