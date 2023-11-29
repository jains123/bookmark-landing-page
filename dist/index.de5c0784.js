const listElements = document.querySelectorAll(".list-elements");
const feature = document.querySelectorAll(".feature");
for(let i = 0; i < listElements.length; i++){
    let tab = listElements[i];
    listElements[1].style.borderBottom = "none";
    listElements[2].style.borderBottom = "none";
    tab.addEventListener("click", function() {
        feature[0].classList.remove("active");
        feature[1].classList.remove("active");
        feature[2].classList.remove("active");
        listElements[0].style.borderBottom = "none";
        listElements[1].style.borderBottom = "none";
        listElements[2].style.borderBottom = "none";
        if (tab.id === "tab1") {
            listElements[0].style.borderBottom = "3px solid #fa5757";
            feature[0].classList.add("active");
        } else if (tab.id === "tab2") {
            listElements[1].style.borderBottom = "3px solid #fa5757";
            feature[1].classList.add("active");
        } else {
            listElements[2].style.borderBottom = "3px solid #fa5757";
            feature[2].classList.add("active");
        }
    });
}
const accordions = document.querySelectorAll(".accordion");
const arrows = document.querySelector("i");
console.log(arrows);
for(let j = 0; j < accordions.length; j++){
    let accor = accordions[j];
    accor.addEventListener("click", function() {
        var panel = accor.nextElementSibling;
        panel.classList.toggle("active-panel");
    });
}
const socialSvgs = document.querySelectorAll(".social");
const paths = document.querySelectorAll(".social-paths");
for(let k = 0; k < socialSvgs.length; k++){
    let soc = socialSvgs[k];
    soc.addEventListener("mouseover", function() {
        paths[k].style.fill = "hsl(0, 94%, 66%)";
    });
    soc.addEventListener("mouseout", function() {
        paths[k].style.fill = "white";
    });
}
const mobileNav = document.querySelector(".mobile-nav");
console.log(mobileNav);
document.querySelector(".burger-container").addEventListener("click", function() {
    mobileNav.style.left = "0";
    console.log("text");
});
document.querySelector("#close").addEventListener("click", function() {
    mobileNav.style.left = "-150%";
});

//# sourceMappingURL=index.de5c0784.js.map
