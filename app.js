let ifPressedOneTime = false;
let counter = 0;

const counterBox = document.getElementById("counter");

const doCiupa = (counter) => {
    counter++;
    counterBox.innerHTML = `Ciupa counter: <span id="color">${counter}</span>`;
    console.log(`ciupa counter: ${counter}`);
    return counter;
}

const ciupa = document.getElementById("ciupaButton").onclick = () => {
    let button = document.getElementById("ciupaButton");
    let h1 = document.getElementById("sas");

    button.innerHTML = "eh";

    if (ifPressedOneTime) {
        switch (h1.innerHTML) {
            case "CLICCA IL BOTTONE":
                h1.innerHTML = "CIUPA";
                counter = doCiupa(counter);
                break;
            case "CIUPA":
                h1.innerHTML = "EH";
                button.innerHTML = "ciupa";
                counter = doCiupa(counter);
                break;
            case "EH":
                h1.innerHTML = "CLICCA IL BOTTONE";
                button.innerHTML = "click me";
                break;
        }
    }

    (button.innerHTML === "click me") ? ifPressedOneTime = false: ifPressedOneTime = true;

}
