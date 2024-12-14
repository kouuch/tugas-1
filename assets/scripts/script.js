const navLinks = document.querySelectorAll("nav ul li");

function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove("active");
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        removeActiveClass();
        this.classList.add("active");
    });
});
