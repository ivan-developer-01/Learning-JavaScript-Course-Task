const form = document.querySelector("#form");
const textInput = document.querySelector("#textInput");
const submitButton = form.querySelector("#submitButton");
const duplicateField = document.querySelector("#duplicateField");

form.addEventListener("submit", e => e.preventDefault());

submitButton.addEventListener("click", () => {
    console.log(textInput.value || "<Нет текста>");
    textInput.value = "";
});

textInput.addEventListener("input", () => {
    duplicateField.textContent = textInput.value || "<Нет текста>";
});
