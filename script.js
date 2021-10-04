document.querySelector(".container > img").classList.add("image")
document.querySelector(".container > div").classList.add("coloured-box")
function hoverFunction(){
    document.querySelector(".container > div").classList.add("coloured-box-hover")
}
document.querySelector(".container > div").addEventListener("mouseover", hoverFunction)
function Function(){
    document.querySelector(".container > div").classList.remove("coloured-box-hover")
}
document.querySelector(".container > div").addEventListener("mouseout", Function)