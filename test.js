let Grade = (score) => {
    if(score >= 80){console.log("A")}
    else if(score >= 70 && score < 79){console.log("B")} 
    else if(score >= 60 && score < 69){console.log("C")} 
    else if(score >= 50 && score < 59){console.log("D")}
    else{console.log("F")}  
}

Grade(65);
Grade(49);