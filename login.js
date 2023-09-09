const wrapperLogin = document.querySelector(".wrapper-login");
const wrapperSignup = document.querySelector(".wrapper-signup");
const signup = document.getElementById("aSLink");
const login = document.getElementById("aLLink");
const loginBtn = document.getElementById("btnLogin");
const signupBtn = document.getElementById("btnSignup");
const loginEmailInp = document.getElementById("loginEmailInp");
const signupEmailInp = document.getElementById("signupEmailInp");
const loginPswInp = document.getElementById("loginPswInp");
const signupPswInp = document.getElementById("signupPswInp");
const signupPswInp2 = document.getElementById("signupPswInp2");

const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signup.addEventListener("click", () => {
  wrapperSignup.style.setProperty("display", "flex");
  wrapperLogin.style.setProperty("display", "none");
});

login.addEventListener("click", () => {
  wrapperSignup.style.removeProperty("display", "none");
  wrapperLogin.style.setProperty("display", "flex");
});

//setting data to localstorage (under working).

// function saveData(email, password) {
//   let data = {
//     email: email,
//     password: password,
//   };

//   let stringifiedData = JSON.stringify(data);
//   localStorage.setItem("data", stringifiedData);
// }

loginBtn.addEventListener("click", () => {
  const pswValidate = loginPswInp.value;
  if (loginEmailInp.value === "") {
    alert("Enter your email.");
  } else if (!emailValidate.test(loginEmailInp.value)) {
    alert("Enter valid email address.");
  } else if (pswValidate.length < 6 || pswValidate.length > 12) {
    alert("Password must be at least 6-12 characters");
  } else if (pswValidate.search(/[a-z]/) < 0) {
    alert("Password must contain at least one lowercase letter");
  } else if (pswValidate.search(/[A-Z]/) < 0) {
    alert("Password must contain at least one uppercase letter");
  } else if (pswValidate.search(/[0-9]/) < 0) {
    alert("Password must contain at least one number");
  } else {
    alert("Success!");
    // saveData(loginEmailInp.value, loginPswInp.value); //setting data to localstorage (under working).
  }
});

signupBtn.addEventListener("click", () => {
  const signupPswValidate = signupPswInp.value;
  if (signupEmailInp.value === "") {
    alert("Enter your email !");
  } else if (!emailValidate.test(signupEmailInp.value)) {
    alert("Enter valid email address !");
  } else if (signupPswValidate.length < 6 || signupPswInp.length > 12) {
    alert("Password must be at least 6-12 characters !");
  } else if (signupPswValidate.search(/[a-z]/) < 0) {
    alert("Password must contain at least one lowercase letter !");
  } else if (signupPswValidate.search(/[A-Z]/) < 0) {
    alert("Password must contain at least one uppercase letter !");
  } else if (signupPswValidate.search(/[0-9]/) < 0) {
    alert("Password must contain at least one number !");
  } else if (signupPswInp2.value === "") {
    alert("Confirm your password !");
  } else if (signupPswInp2.value !== signupPswInp.value) {
    alert("Password dosen't match !");
  } else {
    alert("Success!");
  }
});
