const div = document.querySelector(".container"); 
const adviceId = document.querySelector(".advice-id")
const adviceText = document.querySelector(".advice-text");
const refresh = document.querySelector(".refresh-btn");
const url = 'https://api.adviceslip.com/advice';


async function advice(){
  const res = await fetch(url);
  const {slip : {id , advice} } = await res.json(); 

  adviceText.innerHTML = `"${advice}"`;
  adviceId.innerHTML = `advice #${id}`;
  
} 


advice(); 


refresh.addEventListener("click" , advice);



