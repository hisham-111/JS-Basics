
const div  = document.createElement("div");
document.querySelector("body").appendChild(div).setAttribute("id" , "other_div");
const other_div = document.querySelector("#other_div");

const NameInput = document.querySelector("#name");

NameInput.addEventListener("key" ,(e) =>
{
    other_div.innerText= NameInput.value;
})





