// const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars').engine;
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');
require('dotenv').config();

const viewRoutes = require('./routes/index');
const apiRoutes = require('./api/users');

const app = express();

//const hostname = '127.0.0.1';
//const port = 3000;

app.engine('hbs', exphbs({
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts') 
 }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', viewRoutes); 
app.use('/api', apiRoutes);

// app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync() 
  .then(() => { 
    console.log('Database & tables created!'); 
  }) 
  .catch((err) => { 
    console.error('Error creating database:', err); 
  });


app.use((req, res, next) => {
    res.status(404).render('error', { title: 'Not Found' });
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`:) Server is running on http://localhost:${PORT}`);
});


/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(
        `Server running at http://${hostname}:${port}/`
    );
});*/

/*app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page'});
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

app.get('/registration', (req, res) => {
  res.render('registration', { title: 'Registration Page' });
}); 

app.post('/login', (req, res) =>{
  const {email, password} = req.body; 
  if (email && password) {
    console.log(`You logged in successfully:)`);
    return res.redirect('/');
  }
  else { 
    return res.status(400).send('Login failed:('); }
});


app.post('/registration', (req, res) => { 
    const { photo, name, surname, birthday, email, password} = req.body; 
    if (name && password && email) { 
        console.log(`Registration was successful:)`);
        return res.redirect('/');
    }
    else { 
        return res.status(400).send('Registration failed:('); 
    }
});
*/
