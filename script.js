const menubar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-close");
const navbar = document.querySelector("#navbar");

menubar.addEventListener("click", () => {
    navbar.classList.add("active");
});


close.addEventListener("click", () => {
    navbar.classList.remove("active");
})