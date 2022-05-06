const imgsTag = document.getElementById("images");
const images = document.querySelectorAll("#images img");
console.log(images.length)
let index = 0;

function Slide() {
    
    if (index > images.length -1 ) {
        index = 0;
    }
    imgsTag.style.transform = `translateX(${-index * 400}px)`;  /* Be careful while we use ``  */
    index ++;
}

setInterval(() => {
    Slide();
}, 3000);