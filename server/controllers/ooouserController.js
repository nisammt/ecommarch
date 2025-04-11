
const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const { tokenGenrate } = require("../tkns/token");
const nodemailer= require('nodemailer') 
const userModel = require("../models/userModel");
const cloudinaryInstance = require("../config/cloudneryconfig")

const userRegister = async(req, res)=>{
    try {
            const {name, password, email, mobile, userType} = req.body
            if(!name || !password || !email || !mobile){
                return res.status(400).json({error:  "All field are required"})
            }
            const checkuser = await UserModel. findOne({email})
             //console.log(checkuser)
             if(checkuser){
                return res.status(400).json({error: "User already exist"})
                
             }
              const mobcheck =await UserModel .findOne({mobile})
             // console.log(mobcheck)
              if(mobcheck){
                return res.status(400).json({error: "Mobile number already exist"})
              }

              const salt = await bcrypt.genSalt(10)
              const hashpassword = await bcrypt.hash(password, salt)
              //console.log(hashpassword)


             const userData = new UserModel({
              name, password:hashpassword ,email ,mobile,userType
             })
        
            const newUser = await userData.save()
            res.status(200).json({ message: "User created successfully", data: newUser});
           // console.log(newUser)
           // res.send("user saved")
         // console.log("user saved")
           
        
    } 
    catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error: error.message || "internal server error" })
       
    
    
  }};
  const login = async(req, res)=>{
    try {
      const {email, password} = req.body
       if(!email || !password){
        return res.status(400).json({ error: "All feilds are required" });
       }
      const user = await UserModel.findOne({email})
      //console.log(user)
      if(!user){
        return res.status(400).json({ error: "user user does not exist" });
      }
      
      const passwordcheck = await bcrypt.compare(password,user.password);
      //console.log(passwordcheck);
       
      if(!passwordcheck){
        return res.status(400).json({ error: "incorrect  password" }); 
      }
       const token = tokenGenrate(user, "user")
      // console.log(token)
      res.cookie("token",token)
      
      

      res.status(200).json({message:"Login successfully", data:user});
    
    } catch (error) {
      return res.status(500).json({ error: "internal server error" });
    }
     
  };

  const userProfile = async (req,res)=>{

    try {
    const userid =req.user.id;
    const user = await userModel.findById(userid).select("-password") 
    res.status(200).json({ message: "user profile ", data: user});
      
    } catch (error) {
      return res.status(500).json({ error: "internal server error" });
    }

  };
  
  const logout = async(req, res)=>{
    try {
      
        res.clearCookie("token");

        res.status(200).json({ message: "user logout success" });
      
    } catch (error) {
      return res.status(500).json({ error: "user user does not exist" });
    }
  }

  const userCheking = async(req,res)=>{
    try {

      res.status(200).json({ message: "verified user" });
      
    } catch (error) {
      return res.status(500).json({ error: "user user does not exist" });
    }
  }

  const forgotPassword = async(req, res)=>{

try {   
  const {email} = req.body;

  //if(!email){

  //return res.status(400).json({error:  "All field are required"})
  // }


   const user = await UserModel.findOne({email});
   console.log(user)
   
   if(!user){
     return res.status(400).json({ error: "user user does not exist" });
    }
      const sckey = process.env.JWT + user.password;
      const token = JWT.sign({id:user._id, email:user.email},sckey,{expiresin:'1h'})
      
      const resetURL = `https://your-backend-url/resetpassword?id=${user._id}&token=${token}`;
      
                
       const mailtrans = nodemailer.createTransport({
        service: 'gmail',
        auth :{
          user: "gmailid",
          pass: "pass",
        },
       });
       const  mailsend ={
        to: user.email,
        form: process.env.EMAIL,
        subject :"Password Reset Request",
        text : `Your are receiving your password reset link Please click the link you can change your password`


       };
        await mailtrans.sendMail(mailsend)
        res.status(200).json({message: 'Password reset link send'});
       

} catch (error) {

      return res.status(500).json({ error: "something wen wrong"});
}
};

const resetPassword = async(req,res)=>{
  try {
    const user = await UserModel.findOne({_id:id})
    if(!user){
      return res.status(400).json({message: "User not exists"})
    }
    const sckey = process.env.JWT + user.password;
    const veryfy = jwt.veryfy(token, sckey);
    const encryptedPassword = await bcrypt.hash(password,)



  } catch (error) {
    res.status(500).json({message :" something went worng "})
  }
};
const deleteUser = async (req, res)=>{
  try {
    const {userid} = req.params;

    const userDelete = await UserModel.findByIdAndDelete(userid)
     
    res.status(200).json({message: "User Deleted Successfully",dat:userDelete })
  } catch (error) {
    res.status(500).json({message :" something went worng "})
  }
};

const getallUsers = async (req ,res)=>{
 try {
  const allUsers = await UserModel.find().select("-password");
  res.status(200).json({ message: "users list fetched", data: allUsers });

  
 } catch (error) {
  res.status(500).json({message: " something went wrong please try again"});   }
   
};

const getUserdetails = async (req, res)=>{
  try {
   const userid = req.params.id;
    console.log("userid0" , userid);
    
    const userDetails = await userModel.findById(userid).select("-password")
    res.status(200).json({ message: "User Detail fetched", data: userDetails });

  } catch (error) {
    res.status(500).json({message: " something went wrong please try again"}); 
  }
  
};

const updateUser = async (req, res)=>{
  try {
    const {name, email, mobile} = req.body;

    if(!name || !email || !mobile)
    {
      return res.status(400).json({message: "Name ,Mobile, email are require"});

    }

    const userid = req.user.id;

   // let profilepicurl = null ;

    // if(req.file){

      
    //   const uploadResult = await  cloudinaryInstance.uploader.upload(req.file.path)

    // };

//      //profilepicurl = uploadResult.url;

//  // const updateuserprofile =  await userModel.findByIdAndUpdate(userid,{name, email, mobile,
//      // profilepic: profilepicurl || undefined,
//      },
//      {new:true}
//     );
//     res.status(200).json({message:"User Details Updated" ,data:updateuserprofile})
    
  } catch (error) {

    res.status(500).json({message: " something went wrong please try again"}); 
  }
};




module.exports = {userRegister,login,userProfile,logout, userCheking, forgotPassword, resetPassword, deleteUser,getallUsers, getUserdetails, updateUser};

