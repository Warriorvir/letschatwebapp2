
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBZhlbL7ZI40HkdcY3rwr4i7RgdLTBxc-g",
      authDomain: "kwitter-88325.firebaseapp.com",
      databaseURL: "https://kwitter-88325-default-rtdb.firebaseio.com",
      projectId: "kwitter-88325",
      storageBucket: "kwitter-88325.appspot.com",
      messagingSenderId: "986952410268",
      appId: "1:986952410268:web:acda9ebf0ad321ec2c7959"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
    function adduser(){
      user_name=document.getElementById("user_name").Value;
      firebase.database().ref("/").child(user_name).update({
          progress:"adding user"
      });
    }