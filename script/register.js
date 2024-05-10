var namaIsValid = false;
var alamatIsValid = false;
var tglLahirIsValid = false;
var emailIsValid = false;
var passwordIsValid = false;
var noTelpIsValid = false;

function valNama(){
    let nama = document.forms['register-form']['nama'].value
    let namaHuruf = /^[a-zA-Z\s]*$/

    if(nama.length == 0){
        alert('Field nama harus diisi!')
    }
    else if(nama.length < 4 || nama.length > 20){
        alert('Nama tidak boleh kurang dari 4 huruf atau lebih dari 20 huruf')
    }
    else if(nama.match(namaHuruf)){
        console.log('true')

        namaIsValid = true;
        return namaIsValid
    }
    else{
        alert('Field nama hanya boleh mengandung huruf')
    }
}

function valAlamat(){
    let alamat = document.forms['register-form']['alamat'].value
    
    if(alamat.length == 0){
        alert('Field alamat harus diisi!')
    }
    else{
        alamatIsValid = true;
        return alamatIsValid
    }
}

function valTanggalLahir(){
    let tglLahir = document.forms['register-form']['tgl-lahir']
    var today = new Date();
    var inputTgl = new Date(document.forms['register-form']['tgl-lahir'].value)

    if(!tglLahir.value){
        alert('Field date belum diisi')
    }
    else if(inputTgl > today){
        alert('Tanggal tersebut belum berlalu!')
    }
    else{
        tglLahirIsValid = true;
        return tglLahirIsValid
    }
}

function valEmail(){
    let email = document.forms['register-form']['email'].value
    let arrEmail = email.split('@')

    if(arrEmail.length != 2){
        alert("Email salah")
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
    let pass = document.forms['register-form']['password'].value
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

function valNoTelpon(){
    let noTelp = document.forms['register-form']['phone'].value

    if(noTelp.length == 0){
        alert("Field nomor telpon harus diisi!")
    }
    else if(noTelp.length < 10 || noTelp.length > 12){
        alert("Nomor telpon tidak boleh kurang dari 10 digit dan lebih dari 12 digit")
    }
    else if(!noTelp.startsWith("08")){
        alert("Nomor telpon harus diawali 08")
    }
    else{
        noTelpIsValid = true;
        return noTelpIsValid
    }
}

let form = document.getElementById('register-form')
form.addEventListener('submit', function(e){
    e.preventDefault(); 

    valNama()
    valAlamat()
    valTanggalLahir()
    valEmail()
    valPass()
    valNoTelpon()
    
    if(namaIsValid == true && alamatIsValid == true && tglLahirIsValid == true && emailIsValid == true && passwordIsValid == true && noTelpIsValid == true){
        alert("Register Successful")
        window.location.href = '../html/Login.html';
    }
})
