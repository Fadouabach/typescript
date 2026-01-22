var users = [{userName: 'fadoua', password: '1234', email:'fadoua@gmail.com'}];
function signin() {
    var inputUsername = document.getElementById('userName').value;
    var inputPassword = document.getElementById('password').value;
    var inputEmail = document.getElementById('email').value;
    var userName = users[0].userName;
    var userPassword = users[0].password;
    var userEmail = users[0].email;

    if(inputUsername == userName && inputPassword == userPassword && inputEmail == userEmail){
         window.location.href = 'home.html'
    }
         else if (inputUsername == "" || inputEmail == "" || inputPassword == "") {
    alert("Please fill in all fields");

  }
     else {
          alert("email /username /password is incorrect. try again.");
     }
     
}


