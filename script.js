document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuList = document.getElementById("menu-list");

    menuButton.addEventListener("click", function () {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "block";
        }
    });
});

let box = document.querySelector('.box');
window.onmousemove = function(e){
    let x = e.clientX/3;
    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
}