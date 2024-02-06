let water = false;
let water1 = false;
let snack = false;
let snack1 = false;
let gun = false;
let gun1 = false;
let chances = 5;

do{

let player1 = prompt("enter snack water or gun")

if (player1 == "water") {
  water = true;
}
else if (player1 == "snack") {
  snack = true;
}
else if(player1 == "gun"){
  gun = true;
}
else{
    alert("invalid input plz try : snack / water /gun");
    continue;
}
chances--;
// player 2 
let player2 = Math.floor(Math.random() * 100) + 1
if (player2 < 30) {
  snack1 = true;
  console.log("computer choose snack")
}
else if (player2 < 65) {
  water1 = true;
  console.log("computer choose water")
}
else {
  gun1 = true;
  console.log("computer choose gun")
}
//now comparing  chooises and giving results
if (snack == true && water1 == true) {
  alert("User is winner\nsnack win")
}
else if (snack == true && gun1 == true) {
  alert("gun is winner\ncomputer win")
}
else if (water == true && gun1 == true) {
  alert("water is winner\nUser win")
}
else if (water == true && snack1 == true) {
  alert("snack is winner\ncomputer win")
}
else if (gun == true && water1 == true) {
  alert("water is winner\ncomputer win")
}
else if (gun == true && snack1 == true) {
  alert("gun is winner\nUser win")
}
else {
  alert("game is tai\nno winner")
}
alert(`${chances} chances left Only`);
}while(chances > 0);