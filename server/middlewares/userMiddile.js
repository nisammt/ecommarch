const jwt = require("jsonwebtoken");

const userMiddile = (req, res, next)=>{

try {

 const {token} =req.cookies;

 if(!token){
   
    return res.status(401).json({ message: "user not registerd" });
 }
 //console.log("token", token);
 

 const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded)
 
 console.log("decode", decoded);
 

 if(!decoded){
    return res.status(401).json({ message: "user not registerd" });
 }
 
 if(decoded)
 
      req.user = decoded


    next()
    
} catch (error) {
   return res.status(500).json({ message: "something went worng please try again" }); 
}
}

module.exports = {userMiddile}