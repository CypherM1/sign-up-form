const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");


const alertMessage1 = document.getElementById("passCheck1");
const alertMessage2 = document.getElementById("passCheck2");


password.addEventListener ('input', check);
confirmPassword.addEventListener('input', check);


function check () {
    if (password.value === confirmPassword.value) {
        alertMessage1.textContent = "";
        alertMessage2.textContent = "";
    } else if (alertMessage1.textContent != "") {
        return;
    } else {
        alertMessage1.textContent += "* Passwords do not match!";
        alertMessage2.textContent += "* Passwords do not match!";
    }
}
