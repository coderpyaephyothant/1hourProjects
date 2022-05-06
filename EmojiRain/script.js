
let emojis = ['🐶',"😊","🥰"];
const heartRainFunction = () => { 
    let index = 0;
    emojis.forEach(para=> {
    
    const heartDivTag = document.createElement("div");
    heartDivTag.classList.add("heart");
    heartDivTag.append(para);
    console.log(para)
    document.body.appendChild(heartDivTag);
    heartDivTag.style.left = Math.random() * 90 + "vw";
    heartDivTag.style.animationDuration = Math.random() * 8-3 + "s"
    setTimeout(() => {
        heartDivTag.remove();
    }, 5000);
    })

    index ++;

if (index = emojis.length-1){
    index =0;

    
}

}

setInterval(() => {
    heartRainFunction();
}, 500);
