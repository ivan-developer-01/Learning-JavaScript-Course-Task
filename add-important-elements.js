const idOrSelector = {
    id: 0,
    selector: 1
};

// just some stuff to automate adding elements
for (let key in idOrSelector) {
    let isBinary = (idOrSelector[key] == 0) || (idOrSelector[key] == 1);
    
    if (!isBinary) continue;

    idOrSelector[key] = !!idOrSelector[key];

    window[key] = idOrSelector[key];
}

const mainElementSelector = "body";

const elementQuerySelector = id ? "" : (selector ? "body" : throwError("nothing to select"));
const elementToInsertElement = document.querySelector(elementQuerySelector);

// WOW the really adding important elements is
//!!!!!!!!!!!!!!!!!!//
//!!              !!//
//!!     HERE     !!//
//!!              !!//
//!!!!!!!!!!!!!!!!!!//

// adding some styles...
const head = document.head || document.querySelector("head");

const linkToCSS = document.createElement("link");
linkToCSS.setAttribute("rel", "stylesheet");
// I'm adding the `../` because the style is used by htmls in the subdirectories, nothing other
linkToCSS.setAttribute("href", "../main-style.css");

head.appendChild(linkToCSS);

const elementButtonBack = document.createElement("button");

elementButtonBack.innerHTML = "Назад";
elementButtonBack.classList.add("button-back");

elementButtonBack.addEventListener("click", () => {
    history.back();
});


const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("btn-back-wrapper");
buttonWrapper.appendChild(elementButtonBack);

const buttonWrapper2 = buttonWrapper.cloneNode(true);

elementToInsertElement.prepend(buttonWrapper);
elementToInsertElement.appendChild(buttonWrapper2);

function throwError(errorText, ErrorClass = Error) {
    throw new ErrorClass(errorText);
}

function wait(msWait) {
    return new Promise((resolve, reject) => {
        setTimeout(msWait, resolve);
    });
}