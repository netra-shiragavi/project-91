function adduser(){
    player1 = document.getElementById("playe1_name_input").value;
    player2 = document.getElementById("playe2_name_input").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location="quiz_page.html";

    
}