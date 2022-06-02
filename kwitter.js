function login() {
    username=document.getElementById("name").value;
    window.location="kwitter_room.html";
    localStorage.setItem("name", username);   
    

}
