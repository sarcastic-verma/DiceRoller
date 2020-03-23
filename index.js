
var randomnumber1 = Math.random()*6+1;
randomnumber1 = Math.floor(randomnumber1);
var randomnumber2 = Math.random()*6+1;
randomnumber2 = Math.floor(randomnumber2);
var diceNumber1 = "images/dice"+randomnumber1+".png";
var diceNumber2 = "images/dice"+randomnumber2+".png";
console.log(diceNumber1,diceNumber2);
document.querySelector(".img1").setAttribute("src",diceNumber1)
document.querySelector(".img2").setAttribute("src",diceNumber2)
if(randomnumber2>randomnumber1){
  document.querySelector("h1").textContent= "Player 2 won!!!";
}
else if(randomnumber2<randomnumber1){
  document.querySelector("h1").textContent = "Player 1 won!!!";
}
else{
  document.querySelector("h1").textContent = "Draw!!!";
}
