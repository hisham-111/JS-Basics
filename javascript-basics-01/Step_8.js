document.getElementById("validate").onclick = function() {
    let user = document.getElementById("age").value ;
    const over = 18 ;


    if(user > over ){
        alert("you are over 18");
    }
   
    else{
        alert("you are under 18"); 
    }
} ; 