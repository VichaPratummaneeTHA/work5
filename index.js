var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];


var randomNumImage1 = Math.floor(Math.random() * 6) + 1; // random number 1-6
var randomImage1 = "dice"+ randomNumImage1 +".png";      // dice+ 1-6 +.png
var randomSourceImage1 = "images/"+ randomImage1;        // images/dice+ 1-6 +.png

var randomNumImage2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice"+ randomNumImage2 +".png"
var randomSourceImage2 = "images/"+ randomImage2;

image1.setAttribute("src", randomSourceImage1);
image2.setAttribute("src", randomSourceImage2);

if(randomNumImage1 > randomNumImage2){

    document.querySelector("h1").innerHTML = "🎈Play 1 won";
    document.querySelector("h1").classList.add("color_win");

}else if (randomNumImage1 < randomNumImage2){

    document.querySelector("h1").innerHTML = "play 2 won🎈"
    document.querySelector("h1").classList.add("color_win");


}else{

    document.querySelector("h1").innerHTML = "🎈Draw🎈"
}
