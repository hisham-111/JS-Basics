document.getElementById("validate").onclick = function() {
    let num1 = document.getElementById("first_number").value ;
    let num2 = document.getElementById("second_number").value ;

    let mul = parseInt(num1) % parseInt(num2) ;
    prompt("do you want to make a divide  say | yes | or | y |  to go to divide ? ") 
    alert("First number : " + num1 + "\nSecond number : " +  num2 + "\nThe The divistion : " + mul); 
 };
