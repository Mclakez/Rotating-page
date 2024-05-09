const hamburger = document.getElementById("open")
const close = document.getElementById("close")
const container = document.querySelector(".container")
const circle = document.querySelector(".circle")

hamburger.addEventListener("click", () => {
    container.classList.add("show-nav")
    circle.style.transform = "rotate(-70deg)"
})

close.addEventListener("click", () => {
    container.classList.remove("show-nav")
    circle.style.transform = "rotate(0deg)"
})

