let bulbon=document.getElementById("bulbon")
let imagecat=document.getElementById("image-cat")
let para=document.getElementById("para")
let buttonon=document.getElementById("button-on")
let buttonoff=document.getElementById("button-off")
function onbutton() {
    bulbon.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    para.textContent="Switched on"
    para.style.color="red"
    buttonon.style.backgroundColor="green"
    buttonoff.style.backgroundColor="white"
}
function offbutton() {
    bulbon.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    para.textContent="Switched Off"
    para.style.color="red"
    buttonon.style.backgroundColor="white"
    buttonoff.style.backgroundColor="red"
}