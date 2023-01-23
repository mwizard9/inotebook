var jwt = require('jsonwebtoken');
const JWT_SECRET = 'manishhimalayaia@stude$nt';

const fetchuser = (req,res, next)=>{
   //Get the user from jwt token and add id to req object
   const token = req.headet('auth-token');
   if(!token){
    res.status(401).send({error:"please authenticate using valid user"})
   }
   try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
     next()
 
   } catch (error) {
    res.status(401).send({error:"please authenticate using valid user"})
    
   }
}

module.exports = fetchuser;

