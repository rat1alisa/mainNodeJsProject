
const cleanInput = () => {
    const getInput = doсument.getElementById("text");
    getInput.value = '';                      
  }


/*AXIOS POST LOGIN*/

axios.post('/login', {
  email: '',
  password: '',
})
.then((response) => {
  console.log(response);
}) 
.catch(error => {
  console.log(error);
});

 /* axios({
  method: 'post',
  url: '/login',
  data: {
    firstname: 'Alice',
    lastname: 'Alekseeva',
  }
});*/


/*AXIOS GET LOGIN*/

const params = {
  email: '',
  password: '',
};

axios.get('https://api.example.com/', {params});


/*FETCH LOGIN POST*/

let login = {
  email: '',
  password: '',
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'aplication/json;charset=utf-8',
  },
  body: JSON.stringify(login)
});

let result = await response.json();
alert(result.massage);

/*FETCH LOGIN GET*/

fetch('https:://example.com/ajax.php')
.then(response => {
  return response.json();
})
.then (data => {
  console.dir(data);
});

/*JS LOGIN POST*/

const https = require('https');
const data = JSON.stringify ({
  email: '',
  password: '',
});
const options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'aplication/json',
    'Content-Lenght': data.length,
  }
}
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on ('data', (d) => {
    process.stdout.write(d)
  })
})
req.on('error', (error) => {
  console.error(error)
})
req.write(data)
req.end()


/*JS LOGIN GET*/

const https = require('https');
const data1 = JSON.stringify ({
  email: '',
  password: '',
});
const options1 = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}
const req1 = https.request(options1, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on ('data', (d) => {
    process.stdout.write(d)
  })
})
req1.on('error', (error) => {
  console.error(error)
})
req1.end()

//----------
