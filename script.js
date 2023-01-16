const icon = document.querySelector(".hamburguer i");
const menuMobile = document.querySelector(".menu-mobile");

icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
    menuMobile.classList.add("show-menu");
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-x");
    menuMobile.classList.remove("show-menu");
  }
});

const moreInfo = document.querySelector(".more-info");
const text = document.querySelector(".texts-buttons");

moreInfo.addEventListener("click", () => {
  if ((moreInfo.innerHTML = "Ver mais")) {
    moreInfo.innerHTML = "";
    moreInfo.classList.add("ativo");
    document.getElementById("show").style.display = "block";
    document.getElementById("btn-show").style.display = "block";
  }
});

const footerMenu = document.querySelector("#footer-menu");
const iconMenu = document.querySelector("#icon-menu");

iconMenu.addEventListener("click", () => {
  if (footerMenu.classList.contains("show")) {
    footerMenu.classList.remove("show");
  } else {
    footerMenu.classList.add("show");
  }
});

const footerSobre = document.querySelector("#footer-sobre");
const iconSobre = document.querySelector("#icon-sobre");

iconSobre.addEventListener("click", () => {
  if (footerSobre.classList.contains("show")) {
    footerSobre.classList.remove("show");
  } else {
    footerSobre.classList.add("show");
  }
});

// slider //

const arrowPrev = document.getElementById("arrowPrev");
const arrowNext = document.getElementById("arrowNext");

function slickPrev() {
  window.scrollBy(100, 0);
}

arrowNext.addEventListener("click", () => {
  slickPrev();
});
