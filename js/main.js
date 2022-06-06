
// Declare variable for the exstingn html elements
const wholeContainer = document.querySelector(".whole");
const divToCapture = document.querySelector(".capture");
const displayButton = document.querySelector("#display-button");

// Declare variables for the newly added html elements
let removeButton;
let addedCanvas;

/**
 * Async function that displays the captured canvas
 * and a remove button
 */
const displayCanvas = async () => {

    // returns canvas
    console.log("waiting");
    const canvas = await html2canvas(divToCapture);
    console.log("displayed");

    // create remove button
    removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // append canvas and remove button to div container
    addedCanvas = wholeContainer.appendChild(canvas);
    wholeContainer.appendChild(removeButton);

    // disabling display button
    if (removeButton) {
        displayButton.disabled = true;
    }

    // event listenter that removes the added elements
    removeButton.addEventListener("click", removeCanvas);
}

/**
 * Function that removes the displayed canvas
 */
const removeCanvas = () => {

    addedCanvas.remove();
    removeButton.remove();

    displayButton.disabled = false;
    console.log("removed")
}

/**
 * Function that copies the captured canvas
 */
const copyCanvas = async () => {

    // returns canvas
    const canvas = await html2canvas(divToCapture);

    // 
    canvas.toBlob(function (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
    });

    alert("You have copied the canvas.");
}

/**
 * Function that downloads the captured canvas
 */
const downloadCanvas = async () => {

    // returns canvas
    const canvas = await html2canvas(divToCapture);

    // turn canvas to data url
    const image = canvas.toDataURL('image/png');

    // creates anchor element and appends to the canvas
    const downloadAttribute = document.createElement('a');
    divToCapture.appendChild(downloadAttribute);

    // downloads the canvas
    downloadAttribute.setAttribute('download', 'test.png');
    downloadAttribute.setAttribute('href', image);
    downloadAttribute.click();
}