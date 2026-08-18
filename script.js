const signinup = document.querySelectorAll(".sign-in-up");
const forms = document.querySelectorAll("form");
const signbtns = document.querySelectorAll(".switch");

signbtns.forEach((btn) => btn.addEventListener("click", hide));

function hide() {
    signinup.forEach((sign) => sign.classList.toggle("hide"));
    forms.forEach((form) => form.classList.toggle("hide"));
    signinup[1].classList.toggle("radius-right");
    forms[1].classList.toggle("radius-left");
}
