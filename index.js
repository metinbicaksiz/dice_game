var rastgeleNumara = Math.floor(Math.random() * 6) +1; 

var rastgeleZar = "dice" + rastgeleNumara +".png";

var rastgeleResim = "images/"+ rastgeleZar;

var resim1 = document.querySelectorAll("img")[0];

resim1.setAttribute("src", rastgeleResim);

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

var rastgeleNumara2 = Math.floor(Math.random() * 6) +1; 

var rastgeleResim2 = "images/dice"+ rastgeleNumara2+ ".png";


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rastgeleResim2);


//If player 1 wins
if (rastgeleNumara > rastgeleNumara2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (rastgeleNumara2 > rastgeleNumara) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


function refreshPage(){
  window.location.reload();
} 
