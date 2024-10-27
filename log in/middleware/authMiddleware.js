import { application } from "express";

export const authMiddleware = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    if (!authHeader){
        res.status(401).json({message : 'Unauthorized'})
    }
    next();
};

//Проверка, авторизован ли пользователь

passport.use(
    new localStratagy((user, password, done) => {
        if(user !== 'test_user')
            return done(null, false, {
                message: 'User not found',
            });
        else if (password !== 'test_password')
            return done(null, false, {
                message: 'Wrong password',
            });
        return done(null, {id: 1, name: 'Test', age: 21});
    })
);

function checkAuth() {
    return app.use((req, res, next) => {
        if (req.user) next();
        else res.redirect('/login');
    });
}