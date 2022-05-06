const text = "Hello My name is Pyae Phyo Thant."
const container = document.querySelector(".container");
let index = 0;

function WriteText () {
     container.innerHTML = text.slice(0,index);
     index ++;
     if (index === text.length-1) {
        container.style.opacity="0";
     }
}

setInterval(() => {
    WriteText()
}, 100);