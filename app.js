// 1) Ask instructions about putting a temperature in celsius to be 
// transformed into farenheite
// 2) Input the celcius value
// 3) Use the placeholders id to retrieve value
// 4) Create a <h2> with an id where you will put your new value in 
// farenheite
// 5) Create a new variable to store celsius (value * 1.8) + 32
// 6) Create event add listener when clickin a button to convert
// 7) Put new variable into h2 


document.querySelector("#btn").addEventListener("click", celsFarh)

function celsFarh(){
  const celsValue =  document.querySelector("#celsius").value
  result = (celsValue * 1.8) + 32;
  document.querySelector("#placeToSee").innerHTML = result
}