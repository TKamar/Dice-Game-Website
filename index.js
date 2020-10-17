
var payer1 = randomNum(1);
var payer2 = randomNum(2);
win(payer1, payer2);


function randomNum(i) {
  var rand = Math.floor(Math.random() * 6) + 1;
  var img = document.getElementById("img" + i);
  img.setAttribute("src", "images/dice" + rand + ".png" )
  return rand;
}

function win(play1, play2) {
  var title = document.querySelector("h1");
  if (play1 > play2) {
    title.textContent = "🚩Player 1 win"
  } else if (play1 < play2) {
    title.textContent = "🚩Player 2 win"
  } else {
    title.textContent = "🏳 it's a Draw!"
  }
}
