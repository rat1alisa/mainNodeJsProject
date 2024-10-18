import express from "express";
import { homeRouter } from "./routes/controller.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

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