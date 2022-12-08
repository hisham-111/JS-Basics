document.getElementById("validate").onclick = function() {
    let num1 = document.getElementById("shoe_size").value ;
    let num2 = document.getElementById("year").value ;
    let solution = (num1 * 2 + (5) ) *50 - num2  + (1766) ;
    prompt("let's make a small game  are you ready ? Say yes to continue  ") ;
    alert(solution);
};