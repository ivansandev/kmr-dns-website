// POPUP
let popupTitle = document.getElementById("popup-title")
let popupContent = document.getElementById("popup-content")

function togglePopup(title, content) {
    popupTitle.innerText = title
    popupContent.innerText = content
    document.getElementById("popup-1").classList.toggle("active")
}

// AUTHOR ON HOVER FIELD

let author = document.getElementById("last-wrapper")
let authorButton = document.getElementById("last")
let authorField = document.getElementById("author-quick-info")

authorButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#FFF"
    authorField.style.opacity = "1"
}, false)

author.addEventListener("mouseleave", (event) => {
    setTimeout(() => {
        authorButton.style.backgroundColor = ""
        authorField.style.opacity = ""
    }, 300)
}, false)
