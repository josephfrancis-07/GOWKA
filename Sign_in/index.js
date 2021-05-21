
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
            document.getElementById("user_div").style.display="initial";
            document.getElementById("login_div").style.display="none";

            var user = firebase.auth().currentUser;
            if(user != null){
              var email_id=user.email;
              document.getElementById("user_div").innerHTML= "Welcome user : "+ email_id;  
            }
            
    } else {
     
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="initial";
    }
  });

function login(){

    var userEmail=document.getElementById("email_field").value;
    var userPass=document.getElementById("pass_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error :" + errorMessage );
    });

}