//1.Get Use email
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //2.get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //3.Check email and password
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        // console.log('Valid user');
        window.location.href = "banking.html";
    }

})