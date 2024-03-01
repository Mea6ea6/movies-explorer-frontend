const toggle = document.querySelector(".search__toggle-box");
const input = document.querySelector(".search__toggle-input");
const circle = document.querySelector(".search__toggle-circle");

toggle.onclick = function () {
    if (input.checked) {
    toggle.style.backgroundColor = "#2be080";
    circle.style.backgroundColor = "#fff";
    circle.style.transform = "translateX(16px)";
    } else {
    toggle.style.backgroundColor = "#343434";
    circle.style.backgroundColor = "#a0a0a0";
    circle.style.transform = "translateX(0px)";
    }
};