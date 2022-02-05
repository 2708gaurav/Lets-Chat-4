//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDVl7RhyoTfsJVgoUWqHWVeLQirIGCPJFM",
    authDomain: "kwitter-103b1.firebaseapp.com",
    databaseURL: "https://kwitter-103b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-103b1",
    storageBucket: "kwitter-103b1.appspot.com",
    messagingSenderId: "950245376924",
    appId: "1:950245376924:web:c51825734808258355be59"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
