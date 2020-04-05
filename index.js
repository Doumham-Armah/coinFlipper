var randomNumber1 = Math.floor(Math.random() * 2)+1;
var randomCoinImage = "coin" + randomNumber1 + ".png"; //coin1.png - coin2.png
var randomImageSource = "images/" + randomCoinImage; //images/coin1.png - images/coin6.png
var image1 = document.querySelector("img");
image1.setAttribute("src", randomImageSource);

//If player 1 wins
if (randomCoinImage === "coin1.png") {
  document.querySelector("h2").innerHTML = "Heads!";
}
else if (randomCoinImage === "coin2.png") {
  document.querySelector("h2").innerHTML = "Tails!";
}
