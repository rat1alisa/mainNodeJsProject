
const cleanInput = () => {
    const getInput = doсument.getElementById("text");
    getInput.value = '';                      
}

//registration Js

//AXIOS POST

axios.post('/registration', {
  name: '',
  surname: '',
  dateOfBirth: '',
  password: '',
})
.then((registration_response) => {
  console.log(registration_response);
})
.catch(registration_error => {
  console.log(registration_error);
})


//AXIOS GET

const registration_params = {
  name: '',
  surname: '',
  dateOfBirth: '',
  password: '',
};

axios.get('https://api.exaple.com/', {registration_params});


//FETCH POST
/*
let fetch_registration_response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type':'aplication/json; carset=utf-8',
  },
  body: JSON.stringify(registration_params)
});

let fetch_registration_result = await fetch_registration_result.json();
alert(fetch_registration_result.massage);


//FETCH GET

fetch('https:://exaple.com/ajax.php')
.then(response => {
  return response.json();
})
.then(data => {
  console.dir(data);
})

//JS POST

const https = require('https');
const post_js_data = JSON.stringify( {
  name: '',
  surname: '',
  dateOfBirth: '',
  password: '',
});
const post_js_options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'aplication/json',
    'Content-Lenth': data.length,
  }
}
const js_post_require = https.request(post_js_options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', (d) => {
    process.stdout.write(d)
  })
})
js_post_require.on('error', (error) => {
  console.error(error)
})
js_post_require.write(post_js_data)
js_post_require.end()


//JS GET

const get_js_data = JSON.stringify( {
  name: '',
  surname: '',
  dateOfBirth: '',
  password: '',
});
const get_js_options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}
const js_post_require1 = https.request(get_js_options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', (d) => {
    process.stdout.write(d)
  })
})
js_post_require1.on('error', (error) => {
  console.error(error)
})
js_post_require1.end();

//

function validatePassword2() {
  const passwordField = document.querySelector('.password'); 
  const password = passwordField.value; 
  const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;

  const errorLog = document.getElementById("errorMessage"); 

  if (!passwordPattern.test(password)) {
      errorLog.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
      return false; 
  }

  errorLog.innerHTML = ""; 
  alert('Данные отправлены'); 
  return true; 
}
*/