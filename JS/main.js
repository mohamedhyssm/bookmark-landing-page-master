let links = document.getElementById("Links");
let buttonTogglarNavbar = document.getElementById("buttonTogglarNavbar");


window.onresize = () => {
  window.innerWidth <= 767 ? links.classList.add("collapsed", "collapse", "fade") : links.classList.remove("collapsed", "collapse", "fade");
}

if (window.innerWidth <= 767) {
  links.classList.add("collapsed", "collapse", "fade")
}

buttonTogglarNavbar.onclick = () => {
  buttonTogglarNavbar.classList.toggle("btn-close");
}
