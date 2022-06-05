
/**
 * 
 */
const wholeContainer = document.querySelector(".whole");

const displayCanvas = async () => {

    const canvas = await html2canvas(document.querySelector(".capture"))
    wholeContainer.appendChild(canvas)
}

