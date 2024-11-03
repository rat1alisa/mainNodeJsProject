//function validateEmail(email) {
  //     const emailPattern =  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g ;
  //     return emailPattern.test(email);
  // }
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