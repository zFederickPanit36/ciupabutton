let ifPressedOneTime = false;
let counter = 0;

const ciupa = document.getElementById("ciupaButton").onclick = () => {
    let button = document.getElementById("ciupaButton");
    let h1 = document.getElementById("sas");
    let counterBox = document.getElementById("counter");
    let msg = `Ciupa counter: <span id="color">${counter}</span>`;

    button.innerHTML = "eh";

    if (ifPressedOneTime) {
        switch (h1.innerHTML) {
            case "CLICCA IL BOTTONE":
                h1.innerHTML = "CIUPA";
                counter++;
                counterBox.innerHTML = msg;
                console.log("ciupa");
                break;
            case "CIUPA":
                h1.innerHTML = "EH";
                button.innerHTML = "ciupa";

                break;
            case "EH":
                h1.innerHTML = "CLICCA IL BOTTONE";
                button.innerHTML = "click me";
                break;
        }
    }

    if (counter === 69) {
        alert("sex");
    }

    (button.innerHTML === "click me") ? ifPressedOneTime = false: ifPressedOneTime = true;

}
