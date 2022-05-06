const containerTag = document.getElementById("container");
const imgTag = document.querySelector("img");

containerTag.addEventListener("mousemove",(e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x,y);
    imgTag.style.transformOrigin = `${x}px ${y}px`;
    imgTag.style.transform = "scale(2.5)"
});

document.body.addEventListener("mouseover", ()=>{
    imgTag.style.transform = "scale(1)";
    return;
});


// containerTag.addEventListener("mouseleave", ()=>{
//     imgTag.style.transformOrigin = "center center";
//     imgTag.style.transform= " scale(1)"
// });