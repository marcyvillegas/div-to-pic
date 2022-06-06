
// Declare variable for the exstingn html elements
const wholeContainer = document.querySelector(".whole");
const divToCapture = document.querySelector(".capture");


/**
 * Async function that displays the captured canvas 
 * @returns {button element} the remove button element
 */
const displayCanvas = async () => {

    // returns canvas
    console.log("waiting");
    const canvas = await html2canvas(divToCapture);
    console.log("displayed");

    // add remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    // append canvas to div container
    let addedCanvas = wholeContainer.appendChild(canvas);
    wholeContainer.appendChild(removeButton);

    removeButton.onclick = () => {

        console.log("removed")
        addedCanvas.remove();
        removeButton.remove();
    }
}

/**
 * Event listener that removes the displayed canvas
 */
