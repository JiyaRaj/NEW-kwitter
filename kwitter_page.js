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
room_name = localStorage.getItem("roomname");
username = localStorage.getItem("name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(message_data);
console.log(firebase_message_id);
user_name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_html="<h4>" + user_name + "<img class='user_tick' src='tick.png'> </h4>";
message_html="<h4 class='message_h4'>" + message + "</h4>";
like_button_html="<button class='btn btn-success' id=" + firebase_message_id + " value=" + like + " onclick='updatelike(this.id)' >";
like_button_html2="<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
document.getElementById("output").innerHTML +=  name_html + message_html + like_button_html + like_button_html2;

                         
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name: username, message: msg, like: 0 });
      document.getElementById("msg").value = "";
}

function updatelike(id) {
likes=document.getElementById(id).value;
updated_likes=Number(likes) + 1;
firebase.database().ref(room_name).child(id).update({ like: updated_likes });
}