const buttons = {
    consoleLog: document.querySelector("#consoleLog"),
    alert: document.querySelector("#alert"),
    confirm: document.querySelector("#confirm"),
    prompt: document.querySelector("#prompt")
};

const methodDescriptions = {
    consoleLog: "Метод для вывода сообщения в консоль браузера",
    alert: "Метод для вывода сообщения пользователю, отображается в браузере",
    confirm: "Метод для подтверждения действия пользователем",
    prompt: "Метод для введения информации пользователем в браузере"
};

buttons.consoleLog.addEventListener("click", () => {
    alert(methodDescriptions.consoleLog);
});

buttons.alert.addEventListener("click", () => {
    alert(methodDescriptions.alert);
});

buttons.confirm.addEventListener("click", () => {
    alert(methodDescriptions.confirm);
});

buttons.prompt.addEventListener("click", () => {
    alert(methodDescriptions.prompt);
});
