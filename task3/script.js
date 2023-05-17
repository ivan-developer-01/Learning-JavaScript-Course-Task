const trafficLightEl = document.querySelector("#trafficLight");

let colors = ["green", "yellow", "red"];

function* color(colorsCount) {
    let i = 0;

    while (i <= colorsCount) {
        yield colors[i];

        i++;

        if (i === colorsCount) {
            i = 0;
        }
    }
}

const iterator = color(colors.length);

trafficLightEl.addEventListener("click", () => {
    let nextColor = iterator.next().value;

    trafficLightEl.style.backgroundColor = nextColor;
});
