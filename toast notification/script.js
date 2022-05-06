let btnTag = document.getElementById("btn");
let containerTag = document.getElementById("container");


btnTag.addEventListener("click", ()=>{
    toastFunction();
})

function toastFunction () {
    containerTag.innerHTML="";
    const babe = document.createElement("div");
    babe.append("Welcome to My Website");
    babe.classList.add("babeToast")
    containerTag.appendChild(babe);
    babe.style.bottom= `-${babe.offsetHeight}px`;
    setTimeout(() => {
        babe.style.bottom= "0px";
    }, 100);
    // babe.style.bottom = "50px";
    setTimeout(() => {
        babe.style.bottom= `-${babe.offsetHeight}px`;
    }, 3000);
}