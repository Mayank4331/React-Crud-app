const jwt = require('jsonwebtoken');
module.exports = (req,res,next)=>{
    try{
    const token = req.headers.authorization.split(" ")[1];
     console.log(token)
    const verify= jwt.verify(token, 'this is demo user api');
    console.log(verify);
    if(verify){
    next();
    }
    else
    {
    return res.status(401).json({
        msg:"Usertype is  not admin"
    })
}
}
catch(error){
    return res.status(500).json({
        msg:"invalid token"
    })
}
}