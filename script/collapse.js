let logoDrop =  document.querySelectorAll(".logo-drop");
let collapse = document.querySelectorAll(".collapse-head");
let collapseContent = document.querySelectorAll(".collapse-content");

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function(){
            collapse[i].firstElementChild.classList.toggle("active");
            collapse[i].nextElementSibling.classList.toggle("block");
            logoDrop[i].classList.toggle("rotate");
           reset(i);
        })
    }

function reset(num){
    for (let j = 0; j < collapse.length; j++) {
        if(!(num == j)){
        collapse[j].firstElementChild.classList.remove("active");
        collapse[j].nextElementSibling.classList.remove("block");
        logoDrop[j].classList.remove("rotate");
        }
    }
}