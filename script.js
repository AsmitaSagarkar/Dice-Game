var randomnumber1 = (Math.floor(Math.random() * 6)) + 1;
//console.log(randomnumber1+1);
//var dice = randomnumber1+1;

var randomdiceimage = "dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomdiceimage);

var randomnumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomdiceimage2);

if (randomdiceimage>randomdiceimage2) {
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
    
}
if (randomdiceimage2>randomdiceimage) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
    
}
if (randomdiceimage==randomdiceimage2) {
    document.querySelector("h1").innerHTML = "Draw🚩";
    
}



