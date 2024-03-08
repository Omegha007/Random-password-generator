const inputSlider = document.querySelector("#inputSlider");
const sliderValue = document.querySelector("#sliderValue");
const passBox = document.querySelector("#passBox");
const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numberEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.querySelector(".getBtn");

const copyIcon = document.querySelector("#copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\'\|;:/?<>,.";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});




generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();

});



function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";


    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password);
    }

    return password;
}

copyIcon.addEventListener("click", function () {

    if (passBox.value != "" || passBox.value.length >= 10) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check";
    }

    setTimeout(function () {
        copyIcon.innerHTML = "content_copy";
    }, 3000);
});