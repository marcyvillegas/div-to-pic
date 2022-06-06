
// Declare variable for the exstingn html elements
const wholeContainer = document.querySelector(".whole");
const divToCapture = document.querySelector(".capture");

// Declare variables for the newly created elements
let addedCanvas;
let removeButton;

/**
 * Async function that displays the captured canvas
 */
const displayCanvas = async () => {

    // returns canvas
    console.log("wait");
    const canvas = await html2canvas(divToCapture);
    console.log("alright");

    // add remove button
    removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // append canvas to div container
    addedCanvas = wholeContainer.appendChild(canvas);
    wholeContainer.appendChild(removeButton);
}

/**
 * Removes the displayed canvas
 */
const removeCanvas = () => {

    
}