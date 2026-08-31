const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signInButton.addEventListener("click", () => {
    container.classList.add("active");
});

signUpButton.addEventListener("click", () => {
    container.classList.remove("active");
});
