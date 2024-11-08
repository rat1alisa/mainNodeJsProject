const express = require('express');
const exphbs = require('express-handlebars').engine;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


app.engine('hbs', exphbs({
     extname: 'hbs', 
     defaultLayout: 'main', 
     layoutsDir: path.join(__dirname, 'views/layouts') 
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page', message: 'My first Node.js Express HBS app' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/registration', (req, res) => {
    res.render('registration', { title: 'Registration' });
  });

  app.get('/error', (req, res) => {
    res.render('error', { title: '404' });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//node server.js

/*const http = require("http");
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

import { homeRouter } from "../routes/controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import dotenv from 'dotenv';
import { hasSubscribers } from "diagnostics_channel";

dotenv.config();

const hostname = "127.0.0.1";
const port = 3000;


app.set("view engine", "handlebars");
handlebars.registerPartials(__dirname + "/views/partials");

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

app.use("/contacts", function (req, res){

    res.render("contacts", {
        title: "Contacts",
        email: "alekseevaalisa763@gmail.com",
        phone: "+375(29)5275285",
    });
});

app.use("/", function(req, res){

    res.render("home.hbs");
});

app.listen(3000);


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
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
*/
