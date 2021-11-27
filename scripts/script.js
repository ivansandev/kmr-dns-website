function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active")
}

let author = document.getElementById("last-wrapper")
let authorButton = document.getElementById("last")
let authorField = document.getElementById("author-quick-info")

authorButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#D0D2D3"
    authorField.style.opacity = "1"
}, false)

author.addEventListener("mouseleave", (event) => {
    setTimeout(() => {
        authorButton.style.backgroundColor = ""
        authorField.style.opacity = ""
    }, 300)
}, false)
