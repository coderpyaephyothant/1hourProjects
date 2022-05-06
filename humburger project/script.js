let btn1Tag = document.getElementById("btn1");
let btn2Tag = document.getElementById("btn2");
let navTag = document.getElementById("nav");

btn1Tag.addEventListener("click", ()=> {
    navTag.classList.toggle("active");
    btn1Tag.classList.toggle("active");
    btn2Tag.classList.toggle("active");
    console.log("clicked")
})

btn2Tag.addEventListener("click", ()=> {
    btn2Tag.classList.toggle("active");
    navTag.classList.toggle("active");
    btn1Tag.classList.toggle("active");
})