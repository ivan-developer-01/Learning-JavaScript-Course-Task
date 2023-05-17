const link = document.querySelector("#link");

link.addEventListener("click", (event) => {
    event.preventDefault();

    const newContent = prompt("Введите новый текстовый контент ссылки:");
    link.textContent = newContent;
});
