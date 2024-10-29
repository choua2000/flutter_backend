import jwt from 'jsonwebtoken';

export const generateToken = async(data) => {
   try {
    //MEAN: generate token according to secret key
    const token = await jwt.sign(data, process.env.MY_SECRET_KEY, {expiresIn: "1d"});
    return token
} catch (error) {
       console.log(error.message); //MEAN: error
   }
    
}
export const verifyToken = async(req, res, next) => {
    const authorization = req.headers["authorization"];
    if(!authorization) {
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const payload = jwt.verify(authorization, process.env.MY_SECRET_KEY); 
        if(!verify) {
            return res.status(401).json({message: "Unauthorized"});
        }
        req.payload = payload;
        return next();
    } catch (error) {
        
    }
}
