const trafficLightEl = document.querySelector("#trafficLight");
const lights = trafficLightEl.querySelectorAll(".light");

function removeActiveAll() {
    lights.forEach((light) => {
        light.style.backgroundColor = "";
    });
}

function* yieldsIndex(trafficLightsCount = 3) {
    let i = 0;

    while (true) {
        yield i;
        i++;

        if (i === trafficLightsCount) i = 0;
    }
}

iterator = yieldsIndex();

lights.forEach((light) => {
    light.addEventListener("click", () => {
        removeActiveAll();
        
        const nextIndex = iterator.next().value;
        lights[nextIndex].style.backgroundColor = lights[nextIndex].dataset.activeColor;
    });
});
