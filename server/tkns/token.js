var jwt = require('jsonwebtoken')

 const tokenGenrate =(user, role, res)=>{
    try {
        
          
        const  token = jwt.sign({id: user._id, role },process.env.JWT_SECRET)
        return token;
        
        
        
    } catch (error) {

        res.status(error.status || 500).json({error:error.message || "internal server Error"}); 
    }

}
module.exports ={tokenGenrate}