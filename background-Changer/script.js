const btnTag = document.getElementById("btn");
const colorCodeTag = document.getElementById("colorCode");

btnTag.addEventListener("click",() => {
    document.body.style.background = colorChangeFunction();
    colorCodeTag.innerText= " Background Color  "  + colorChangeFunction();
    console.log(colorChangeFunction());
});

function colorChangeFunction () {
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`
}