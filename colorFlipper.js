const colors = ["green","purple","yellow", "red", "rgba(133,122,200)", "#f15025"];
const containerEl = document.getElementsByClassName("container")[0];
const btnEl = document.getElementById("btn")
const colorEl = document.getElementsByClassName("color")[0];
btnEl.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * colors.length)
    containerEl.style.backgroundColor = colors[randomNumber];
    colorEl.textContent = colors[randomNumber];
})