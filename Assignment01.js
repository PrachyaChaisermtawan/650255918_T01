let randNum = Math.floor(Math.random()*101);
let x = 0;
function GN(){
    const Guess_Number = document.getElementById("G_N").value;
    if (Guess_Number == randNum){alert("ถูกต้อง")}
    else if(Guess_Number>randNum){alert("มากกว่า")}
    else if(Guess_Number<randNum){alert("น้อยกว่า")}
}