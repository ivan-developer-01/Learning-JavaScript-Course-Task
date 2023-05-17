const form = document.querySelector("#form");
const textInput = document.querySelector("#textInput");
const submitButton = form.querySelector("#submitButton");
const duplicateField = document.querySelector("#duplicateField");

form.addEventListener("submit", e => e.preventDefault());

submitButton.addEventListener("click", () => {
    duplicateField.textContent = textInput.value || "<Нет текста>";
    textInput.value = "";
});

// just in case
textInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();
        duplicateField.textContent = textInput.value || "<Нет текста>";
        textInput.value = "";
    }
});
