const jwt = require("jsonwebtoken");


const adminMiddile = (req, res, next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({message: "token not provided"});
        }
          const decode = jwt.verify(token, process.env.JWT_SECRET);
          console.log(decode)
        if(!decode){
            return res.status(401).json({message: "user not autherized"});
        }
        console.log("decode",decode);
        
        if (decode.role!=="admin") {
            return res.status(401).json({ message: "user not a admin" });
         }
        
    
       req.user = decode;

       next() 
    } catch (error) {
        
        res.status(500).json({message: "something went worng , please try agian"})
        
    }
};
module.exports ={adminMiddile};