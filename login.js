const wrapperLogin = document.querySelector(".wrapper-login");
const wrapperSignup = document.querySelector(".wrapper-signup");
const signup = document.getElementById("aSLink");
const login = document.getElementById("aLLink");

signup.addEventListener("click", () => {
  wrapperSignup.style.setProperty("display", "flex");
  wrapperLogin.style.setProperty("display", "none");
});

login.addEventListener("click", () => {
  wrapperSignup.style.removeProperty("display", "none");
  wrapperLogin.style.setProperty("display", "flex");
});
