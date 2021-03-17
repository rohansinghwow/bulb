const buttonEl = document.querySelector("button")
const bulbEl = document.querySelector("h3")

buttonEl.onclick = function(){
    bulbEl.classList.toggle("bulb")
}