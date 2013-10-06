$(document).ready(function(){
	$("#main").click(changeColors);
});
var colors = ["red", "blue", "black", "green", "purple", "yellow"];

var changeColors = function(){
	var randomNum1 = Math.floor(Math.random() * colors.length);
	var randomNum2 = Math.floor(Math.random() * colors.length);

	var randomColor1 = colors[randomNum1];
	var randomColor2 = colors[randomNum2];

$("h2").text(randomColor1);
$("h2").css("color",randomColor2);
}