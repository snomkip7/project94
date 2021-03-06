firebase.initializeApp(firebaseConfig);
var firebaseConfig = {
      apiKey: "AIzaSyDMcaFCr7AHY6abqOA_GIhp7HS8eOSMXhE",
    authDomain: "kwitter-cefb1.firebaseapp.com",
    databaseURL: "https://kwitter-cefb1-default-rtdb.firebaseio.com",
    projectId: "kwitter-cefb1",
    storageBucket: "kwitter-cefb1.appspot.com",
    messagingSenderId: "268780299023",
    appId: "1:268780299023:web:9229bd08ab1c58889d147a",
    measurementId: "G-KFXX2Y3H5W"
  };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
