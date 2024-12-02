


const validateToken=(req,res,next)=>{
        const token= req.header('Authorization');

        console.log(token)
        if(!token) return res.status(401).send('Access denied. No token provided.');

        try {
            next();
        } catch (error) {
            res.status(501).json({
                ok:false,
                message: 'Invalid token'
            })
        }
}


module.exports=validateToken