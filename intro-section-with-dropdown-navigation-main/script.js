let menuOpened = false;
let featuresOpened = false;
let companyOpened = false;

function toggleMenu() {
    const navbar = document.getElementsByClassName("navbar-container")[0];
    const overlay = document.getElementsByClassName("overlay")[0];
    if (!menuOpened) {
        navbar.classList.add("active");
        overlay.classList.add("active");
    } else {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    }
    menuOpened = !menuOpened;
}

function toggleFeatures() {
    const sublist = document.getElementById("features");
    if (!featuresOpened) {
        sublist.classList.add("active");
    } else {
        sublist.classList.remove("active");
    }
    featuresOpened = !featuresOpened;
}

function toggleCompany () {
    const sublist = document.getElementById("company");
    if (!companyOpened) {
        sublist.classList.add("active");
    } else {
        sublist.classList.remove("active");
    }
    companyOpened = !companyOpened;
}