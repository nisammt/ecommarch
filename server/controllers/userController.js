const user = require("../models/userModel");
const bcrypt = require('bcrypt'); 
const { tokenGenrate } = require("../tkns/token");

const userSignup = async (req, res)=>{
    try {
      
        const { name, email, mobile, password, confirmPassword } = req.body;
        
        if (!name || !email || !mobile || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
          }

          if (password !== confirmPassword) {
            return res
              .status(400)
              .json({ message: "Password and Confirm password not match" });
          }

          const checkUser = await user.findOne({email}).select("-password");

          if(checkUser) {
            return res.status(400).json({message: " User already Exsit"})
          }
           const mobileCheck = await user.findOne({email}).select("-password");
           
           if(mobileCheck) {

             return res.status(400).json({message:"Mobile Number already Exsit" })
           }
           const salt = await bcrypt.genSalt(10);
           
          const hashedPassword = await bcrypt.hash(password,salt)
          const userData = new user({
            name,email,password:hashedPassword,mobile,
          });
          const saveUser = await userData.save();

          const { password: _, ...userWithoutPassword } = saveUser.toObject();

          res.status(200).json({message: "Admin Created Succesfuly", data: userWithoutPassword})

    } catch (error) {
      
        res.status(error.status || 500).json({error: error.message || "internal server error" })        
    }
}

const userLogin = async (req, res)=>{
  try {
    const {email, password}= req.body;
   console.log(req.body);
   
  
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let userChecking = await user.findOne({email})
 
  //console.log("userChecking", userChecking);
  

  if(!userChecking)
  {
    return res.status(400).json({message: "User not found"});

  }

  if(!userChecking.isActive)
  {
    return res.status(400).json({ message: "User profile deactivated" });
  }

  // console.log("user activate",userChecking.isActive);
   
   const checkPassword = await bcrypt.compare(password,userChecking.password)

  console.log("check password", checkPassword);
   

  if(!checkPassword)
  {
    return res.status(400).json({message:"Incorrect Password"})
  }
  //console.log(checkPassword);
  
  const token = tokenGenrate(user,"user",res);

  res.cookie("token",token);

  const {password:_,...userWithoutPassword} = userChecking.toObject();

  res.status(200).json({message:"Login successfuly", data :userWithoutPassword });

   
 } catch (error) {

  res.status(error.status || 500).json({error: error.message || "internal server error" })    
 }

 }
 const userCheck = async (req, res)=>{

  try {

    res.status(200).json({ message: "verified user" });
    
  } catch (error) {
    
    res.status(error.status || 500).json({error: error.message || "internal server error" })  

  }
   
 }
 const userProfile = async (req,res)=>{
 
     try {
     const userid =req.user.id;
     console.log("User Id", userid);
     
     const user = await userModel.findById(userid).select("-password") 
     res.status(200).json({ message: "user profile ", data: user});
       
     } catch (error) {
       return res.status(500).json({ error: "internal server error" });
     }
 
   };
   const userLogout = async(req, res)=>{
    try {
      
        res.clearCookie("token");

        res.status(200).json({ message: "user logout success" });
      
    } catch (error) {

      return res.status(500).json({ error: "user user does not exist" });
    }
  }
  const getallUsers = async (req ,res)=>{
   try {
    const allUsers = await user.find().select("-password");

    res.status(200).json({ message: "users list fetched", data: allUsers });
  
    
   } catch (error) {
    res.status(500).json({message: " something went wrong please try again"});}
     
  };
  
  const getUserdetails = async (req, res)=>{
    try {
     const userid = req.params.id;

      //console.log("userid0" , userid);
      
      const userDetails = await user.findById(userid).select("-password")

      res.status(200).json({ message: "User Detail fetched", data: userDetails });
  
    } catch (error) {
      
      res.status(500).json({message: " something went wrong please try again"}); 
    }
    
  };

  




module.exports ={userSignup,userLogin,userCheck,userProfile,userLogout,getallUsers,getUserdetails}