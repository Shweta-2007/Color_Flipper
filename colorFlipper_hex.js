const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const containerEl=document.getElementsByClassName("container")[0];
const colorEl=document.getElementsByClassName("color")[0];
const btnEl=document.getElementById("btn")

btnEl.addEventListener("click",function(){
let hexColor="#";
for( let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()]
}
containerEl.style.backgroundColor=hexColor;
colorEl.textContent=hexColor;
})
function getRandomNumber(){
   return Math.floor(Math.random()*hex.length)
}