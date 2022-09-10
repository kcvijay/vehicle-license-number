/* Initialization */
const main = document.querySelector("main");
const ownerName = document.getElementById("owner-name");
const maker = document.getElementById("maker");
const model = document.getElementById("model");
const year = document.getElementById("year");

const getAutomatic = document.getElementById("get-automatic");
const getManual = document.getElementById("get-manual");
const manualRegistrationDiv = document.querySelector(".manual-registration");

const manualInputField = document.getElementById("input-manually");

const btnGenerate = document.getElementById("generate");
const btnProceedOrAvailability = document.getElementById(
  "proceedOrAvailability"
);

let regNumber = document.getElementById("registration-number");

/***************/

let characterSide = "";
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberSide = "";
let numbers = "1234567890";
for (let i = 0; i < 3; i++) {
  characterSide += characters.charAt(Math.random() * characters.length);
}

for (let i = 0; i < 3; i++) {
  numberSide += numbers.charAt(Math.random() * numbers.length);
}

function getRegistration() {
  if (!ownerName || !maker || !model || !year) {
    return false;
  }
  regNumber.textContent = `${characterSide}-${numberSide}`;
}

getManual.addEventListener("click", () => {
  if (manualRegistrationDiv.classList.contains("hide")) {
    manualRegistrationDiv.classList.remove("hide");
  } else {
    manualRegistrationDiv.classList.add("hide");
  }

  btnGenerate.addEventListener("click", () => {
    regNumber.textContent = manualInputField.value.toUpperCase();
    btnProceedOrAvailability.classList.remove("hide");
    btnProceedOrAvailability.textContent = "Check for Availability";
  });
});

getAutomatic.addEventListener("click", () => {
  manualRegistrationDiv.classList.add("hide");
  btnGenerate.addEventListener("click", (e) => {
    e.preventDefault();
    getRegistration();
    btnProceedOrAvailability.classList.remove("hide");
    btnProceedOrAvailability.textContent = "Proceed to Reserve";
  });
});
