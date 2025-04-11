const admin = require('../models/adminModel')
const bcrypt = require('bcrypt'); 
const { tokenGenrate } = require('../tkns/token');

const adminSignup = async (req, res) =>{
    try {
        const {
            name,email, password,  mobile, confirmPassword, role = "admin",} = req.body;  

           // console.log(req.body);
                                                               
 
          if (!name || !email || !mobile || !password || !confirmPassword) {

            return res.status(400).json({ message: "All fields required" });
          }

          if (password !== confirmPassword) {
            return res
              .status(400)
              .json({ message: "Password and Confirm password not match" });
          }
          
          const checkAdmin = await admin.findOne({email, role:"admin"}).select("-password");

           if(checkAdmin){

            return res.status(400).json({message:"Admin user already Exsit"})
           }

           //console.log("check admin",checkAdmin);
           

           const mobileCheck = await admin.findOne({mobile, role:"admin",}).select("-password");

           if(mobileCheck) {
             return res.status(400).json({message:"Mobile Number already Exsit"})
           }

           const salt = await bcrypt.genSalt(10);

           const hashedPassword = await bcrypt.hash(password,salt)

           const adminData = new admin({
             name,email,password:hashedPassword, mobile,role
           });
          // console.log("admin data",adminData);
           

          const saveadmin = await adminData.save();
        
          res.status(200).json({message: "Admin Created Succesfuly", data: saveadmin})      

        
        
    } catch (error) {

        res.status(error.status || 500).json({error: error.message || "internal server error" })  
      
    }
        
    };

    const adminLogin = async(req, res)=>{
      try {
          const {email , password} = req.body;
           console.log("req.body",req.body);
           

          if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
          }
         

          let adminw = await admin.findOne({email, role: "admin"});
         

          if(!adminw)
          {
            return res.status(400).json({message: "Admin User Not Found"})
          }
          
          if(!adminw.isActive){
            return res.status(400).json({ message: "User profile deactivated" });
          }
        
          

          const checkPassword = await bcrypt.compare(password,adminw.password)
          

          if(!checkPassword){

            return res.status(400).json({message:"Incorrect Password"})

        
         }
        //  console.log(c);
          
          const token = tokenGenrate(admin,"admin",res);

          res.cookie("token",token);

         // console.log("token",token)

          const { password: _, ...adminWithoutPassword } = adminw.toObject();

          res.status(200).json({message:"Login successfuly", data :adminWithoutPassword });
         

        
      } catch (error) {

      
        res.status(error.status || 500).json({error: error.message || "internal server error" }) 
        
      }
    }
    const checkAdmin = async(req, res)=>{
      try {
          
        res.status(200).json({ message: " Admin verified user" });

      } catch (error) {
        res.status(error.status || 500).json({error: error.message || "internal server error" }) 
      }

    }
module.exports ={adminSignup,adminLogin,checkAdmin}