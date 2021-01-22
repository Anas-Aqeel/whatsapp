let showGroup = document.getElementById("show")
let chatGroup = document.getElementById("chat")

function openGroup() {
    chatGroup.classList.remove("hide")
    showGroup.classList.add("hide")
}
function goBack() {
    showGroup.classList.remove("hide")
    chatGroup.classList.add("hide")
}