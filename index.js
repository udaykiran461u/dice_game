var randomNumber1=Math.floor(Math.random()*6)+1;
// document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
var randomsrc1="./dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomsrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomsrc2="./dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomsrc2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}