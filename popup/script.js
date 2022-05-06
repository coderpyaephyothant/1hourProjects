const openTag = document.getElementById("open");
const closeTag = document.getElementById("close");
const popContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup")


openTag.addEventListener("click", ()=> {
    
    setTimeout(() => {
        popContainer.classList.add("active");
    }, 100);

})

closeTag.addEventListener("click",()=> {
    
        
        setTimeout(() => {
            popContainer.classList.remove("active");
        }, 100);
})