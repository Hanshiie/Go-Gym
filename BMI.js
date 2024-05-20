function validateForm() {
  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const exercise = document.getElementById("exercise").checked;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  }

  if (age === "" || age < 1) {
    document.getElementById("ageError").textContent =
      "Please enter a valid age.";
    isValid = false;
  }

  if (weight === "" || weight < 1) {
    document.getElementById("weightError").textContent =
      "Please enter a valid weight.";
    isValid = false;
  }

  if (height === "" || height < 1) {
    document.getElementById("heightError").textContent =
      "Please enter a valid height.";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "Gender is required.";
    isValid = false;
  }
  if (!exercise) {
    document.getElementById("exerciseError").textContent =
      "Exercise is required.";
    isValid = false;
  }

  if (isValid) {
    calculateBMI(weight, height);
  }
}

function calculateBMI(weight, height) {
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  let suggestion;

  if (bmi < 18.5) {
    suggestion = "You are underweight. Consider a balanced diet.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    suggestion = "You have a normal weight. Keep up the good work!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    suggestion =
      "You are overweight. Consider a healthier diet and regular exercise.";
  } else {
    suggestion =
      "You are obese. It is advisable to consult a healthcare provider.";
  }

  const resultText = `Your BMI is ${bmi}. ${suggestion}`;
  const formData = `Name: ${document.getElementById("name").value}
Email: ${document.getElementById("email").value}
Age: ${document.getElementById("age").value}
Weight: ${document.getElementById("weight").value}
Height: ${document.getElementById("height").value}
Gender: ${document.querySelector('input[name="gender"]:checked').value}
Exercise Regularly: ${exercise ? "Yes" : "No"}
BMI Result: ${resultText}`;

  document.getElementById("result").value = formData;
}

const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", validateForm);

const asideContent = document.querySelector(".aside-content");
const closeAside = document.querySelector(".close-menu");
const openAside = document.querySelector(".menu-bar");

openAside.addEventListener("click", () => {
  asideContent.classList.toggle("hidden");
  openAside.classList.toggle("hidden");
  closeAside.classList.toggle("hidden");
});

closeAside.addEventListener("click", () => {
  asideContent.classList.toggle("hidden");
  openAside.classList.toggle("hidden");
  closeAside.classList.toggle("hidden");
});
