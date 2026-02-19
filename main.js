const container = document.getElementById("container");
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");

signUp.onclick = () => {
   container.classList.add("active");
};

signIn.onclick = () => {
   container.classList.remove("active");
};


const goSignUp = document.getElementById("goSignUp");
const goSignIn = document.getElementById("goSignIn");

if (goSignUp) {
  goSignUp.onclick = () => container.classList.add("active");
}

if (goSignIn) {
  goSignIn.onclick = () => container.classList.remove("active");
}