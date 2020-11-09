let logoDrop =  document.querySelectorAll(".logo-drop");
let collapse = document.querySelectorAll(".collapse-head");
let collapseContent = document.querySelectorAll(".collapse-content");
// let collapseContent = document.querySelectorAll(".collapse-content");

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function(){
            collapse[i].firstElementChild.classList.toggle("active");
            collapse[i].nextElementSibling.classList.toggle("block");
            logoDrop[i].classList.toggle("rotate");
    });
    
}