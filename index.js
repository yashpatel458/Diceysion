

var x=Math.random();
var randomNumber1 = Math.floor((x*6)+1);

var y=Math.random();
var randomNumber2 = Math.floor((y*6)+1);


var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource ="images/" + randomDiceImage;

var image1= document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 ="images/" + randomDiceImage2;

var image2= document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


var player1=prompt("Enter Name of Player 1");
var player2=prompt("Enter Name of Player 2");



document.querySelectorAll("p")[0].innerHTML= player1;
document.querySelectorAll("p")[1].innerHTML= player2;


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= player1 + " Wins the Toss! 🔥";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=player2 + " Wins the Toss! 🔥";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}

function refreshPage(){
    location.reload();
    }

