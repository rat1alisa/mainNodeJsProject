
function validatePassword(password) { 
    const passwordValid = "RegExp ";
    if (!password.match(passwordValid)) { 
        return 'Пароль должен содержать не менее 8 символов, одну букву в верхнем регистре, одну букву в нижнем регистре, одну цифру и один символ';
    }
    return null;
} 
module.exports = validatePassword;


/*function validatePassword2() {
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
}*/