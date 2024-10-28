let colors = ["blue","red","brown", "purple", "yellow", "pink", "green", "orange", "darkgrey","black","white"]
let bodyColor = document.querySelector("body")
function changeColor(){
    let selectColor = colors.shift();
    colors.push(selectColor)
    bodyColor.setAttribute("style","background-color:"+selectColor)
    document.getElementById("color").innerHTML = selectColor
}