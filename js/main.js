
// Declare variable for the exstingn html elements
const wholeContainer = document.querySelector(".whole");
const divToCapture = document.querySelector(".capture");

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

    // add remove button
    removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // append canvas to div container
    addedCanvas = wholeContainer.appendChild(canvas);
    wholeContainer.appendChild(removeButton);

    // event listenter that removes the added elements
    removeButton.addEventListener("click", removeCanvas);
}

/**
 * Function that remove the displayed canvas
 */
const removeCanvas = () => {
    console.log("removed")
    addedCanvas.remove();
    removeButton.remove();
}