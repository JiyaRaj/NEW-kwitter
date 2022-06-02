const firebaseConfig = {
      apiKey: "AIzaSyCz8jWXx81tpG6EaDjayhub6bMAAdb7TCE",
      authDomain: "practice-firebase-94-6f1ff.firebaseapp.com",
      databaseURL: "https://practice-firebase-94-6f1ff-default-rtdb.firebaseio.com",
      projectId: "practice-firebase-94-6f1ff",
      storageBucket: "practice-firebase-94-6f1ff.appspot.com",
      messagingSenderId: "623810182353",
      appId: "1:623810182353:web:8c8db3035a82cc01bf59f0"
    };
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("name");
document.getElementById("username").innerHTML=username;

function log_out(){
      localStorage.clear();
      window.Location="index.html";
}

function add_name(){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row_html="<div class= 'room_name' id=" + Room_names + " onclick='redirect_room(this.id)'>" + Room_names + "</div> <hr>";
document.getElementById("rooms").innerHTML+=row_html;
      });});}
getData();

function redirect_room(room) {
localStorage.setItem("roomname", room);
window.location="kwitter_page.html";
}