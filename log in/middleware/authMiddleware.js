
export const authMiddleware = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    if (!authHeader){
        res.status(401).json({message : 'Unauthorized'})
    }
    next();
};