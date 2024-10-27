
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

import { homeRouter } from "./routes/controller.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import dotenv from 'dotenv';

dotenv.config();

app.engine(
    'handlebars',
    handlebars.engine({defaultLayout: 'main'})
);

app.set('views', './views');
app.set('view', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Greetings form Handlebars',
    });
});

async function main(){
    app.use(express.json());
    app.use('/api', authMiddleware, homeRouter);
    app.use('*', (req, res) => {
        res.status(201).json({message : 'Not found'})
    });

    app.listen(process.env.Port || 4200, ()=>{
        console.log(`Server running at ${process.env.PORT} port`)
    });
};

main();

