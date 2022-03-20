function authMiddleware (req,res,next){
    if(req.session && req.session.user){
        return next(); 
    }
    return res.redirect('/users/login');
    
}
module.exports = authMiddleware;