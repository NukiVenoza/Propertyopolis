var emailIsValid = false;
var passwordIsValid = false;

function valEmail(){
    let email = document.getElementById('email').value
    let arrEmail = email.split('@')

    if(arrEmail.length != 2){
        alert("Email salah!")
    }
    else if(arrEmail[0].length <= 1){
        alert("Email belum diisi!")
    }
    else if(!email.endsWith(".com")){
        alert("email harus diakhiri dengan .com")
    }
    else{
        emailIsValid = true;
        return emailIsValid
    }
}

function valPass(){
    let pass = document.getElementById('password').value
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;

    if(pass.length < 8){
        alert("Password tidak boleh kurang dari 8 huruf!")
    }
    else if(pass.length > 10){
        alert("Password tidak boleh lebih dari 10 huruf!")
    }
    else if(pass.match(regexPassword)){
        console.log('true')

        passwordIsValid = true;
        return passwordIsValid
    }
    else{
        alert("Password harus mengandung huruf besar, huruf kecil dan angka")
    }
}

let form = document.getElementById('login-form')
form.addEventListener('submit', function(e){
    e.preventDefault(); 

    valEmail()
    valPass()

    if(emailIsValid == true && passwordIsValid == true){
        alert("Login Successful")
        window.location.href = '../html/home.html';
    }
})
