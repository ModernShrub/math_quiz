player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_q").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_a").innerHTML = "Answer Turn - " + player2_name; 
function send() {
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
cans = parseInt(num1) * parseInt(num2);
quest ="<h4>" + "Q." + num1 + "x" + num2 + "=" + "?" + "</h4>";
inans = "<br> Answer = <input type='text' id='inp_chk_box' placeholder='Answer'>"
btn = "<br><br><button class='btn btn-success' onclick='check()'>Check your Answer</button>";
row = quest + inans + btn;
document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
}
 question_turn = "player1";
 answer_turn = "player2";
 
