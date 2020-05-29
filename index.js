const btn = document.querySelector("button")
const img = document.querySelector("img");
const audio = document.querySelector("#audio")

btn.addEventListener("mousedown", toggleImage);

function toggleImage() {
img.classList.add("active")
btn.classList.add("active")
    audio.play()
}

btn.addEventListener("mouseup", closeImage);

function closeImage() {
    setTimeout(() => {
        img.classList.remove("active")
        btn.classList.remove("active")
        audio.pause();
    },2000)
}