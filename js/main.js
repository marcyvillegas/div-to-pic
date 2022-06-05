
/**
 * 
 */
const wholeContainer = document.querySelector(".whole");


const displayCanvas = async () => {

    console.log("wait");
    const canvas = await html2canvas(document.querySelector(".capture"))
    console.log("alright");
    wholeContainer.appendChild(canvas)
}

