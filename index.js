// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";



// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//             document.getElementById("user_div").style.display="block";
//             document.getElementById("login_div").style.display="none";

//             var user = firebase.auth().currentUser;
//             if(user != null){
//               var email_id=user.email;
//               document.getElementById("user_div").innerHTML= "Welcome user : "+ email_id;  
//             }
            
//     } else {
     
//         document.getElementById("user_div").style.display="none";
//         document.getElementById("login_div").style.display="block";
//     }
//   });

function login(){

    var userEmail=document.getElementById("email_field").value;
    var userPass=document.getElementById("pass_field").value;

    if (userEmail=="admin@email.com" && userPass=="password"){
      window.location.href="./SHARE FOOD.html"  
      //window.alert("Success")
    }
    else {
      window.alert("Invalid Username or Password")
    }





    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    // .then((userCredential) => {
    //   // Signed in
    //   var user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   window.alert("Error :" + errorMessage );
    // });

}