function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    console.log(username+email+password+cpassword);
    
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpassword(password,cpassword)

}

function checkusername(username) {
if(username.length > 7) {
    document.getElementById('username').classList.add('success');
    document.getElementById('username').classList.replace('error','success');
    document.getElementById('username_txt').innerHTML='username is entered correctly'
    document.getElementById('username_txt').classList.add('txtsuccess');
    document.getElementById('username_txt').classList.replace('txterror','txtsuccess');
}
else{
    document.getElementById('username').classList.add('error');
    document.getElementById('username_txt').innerHTML='username must be 8 character long'
    document.getElementById('username_txt').classList.add('txterror');
}
}



function checkemail(email) {
    if(email.length > 8 && email.includes('@') && email.includes('.')) {
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error','success');
        document.getElementById('email_txt').innerHTML='email is entered correctly'
        document.getElementById('email_txt').classList.add('txtsuccess');
        document.getElementById('email_txt').classList.replace('txterror','txtsuccess');
    }
    else{
        document.getElementById('email').classList.add('error');
        document.getElementById('email_txt').innerHTML='email be 9 character long and contain @, .'
        document.getElementById('email_txt').classList.add('txterror');
}
}

function checkpassword(password) {
    if(password.length > 7 && password.includes('.')) {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_txt').innerHTML='password is entered correctly and includes .'
        document.getElementById('password_txt').classList.add('txtsuccess');
        document.getElementById('password_txt').classList.replace('txterror','txtsuccess');
    }
    else{
        document.getElementById('password').classList.add('error');
        document.getElementById('password_txt').innerHTML='password be 8 character long and contain .'
        document.getElementById('password_txt').classList.add('txterror');
}
}

function checkcpassword(password,cpassword) {
    if(password == cpassword && password!='') {
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error','success');
        document.getElementById('cpassword_txt').innerHTML='password is varified'
        document.getElementById('cpassword_txt').classList.add('txtsuccess');
        document.getElementById('cpassword_txt').classList.replace('txterror','txtsuccess');
    }
    else{
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_txt').innerHTML='value entered does not match above password'
        document.getElementById('cpassword_txt').classList.add('txterror');
}
}