let menu = document.querySelector(".nav");
let hamOpen = document.querySelector(".hamburger");
let hamClose = document.querySelector(".close");

function openHam(){
    if(menu.style.visibility === "hidden"){
        menu.style.visibility = "visible";
        hamClose.style.display = "block";
        hamOpen.style.display = "none";
    }else(
        menu.style.visibility = "hidden",
        hamClose.style.display = "none",
        hamOpen.style.display = "block"
    );
}

hamOpen.addEventListener("click", openHam);
hamClose.addEventListener("click", openHam);
