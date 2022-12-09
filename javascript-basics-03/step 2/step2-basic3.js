let button = document.querySelectorAll('a')
let paragraph = document.querySelectorAll('texte')
button.forEach ((visibleHide) =>{ 
visibleHide.addEventListener('click' , (visibleHide) => {
  if(visibleHide.target.id== 'hide'){
    texte.style = "display: none";
  }
  else {
    texte.style = 'display:block' ;}
  })
})