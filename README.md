# Exploring html2canvas library 🔭
I have noticed that the documentation of html2canvas library only shows how to display the canvas.<br>
```javascript
html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});
```
_Code from https://html2canvas.hertzen.com/_ <br><br>
So I figured out other ways on utilizing it. <br>
<hr>

### Displaying and removing
Adding a remove button when the canvas is displayed.
```javascript
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
```
Removing the displayed canvas
```javascript
const removeCanvas = () => {

    addedCanvas.remove();
    removeButton.remove();

    displayButton.disabled = false;
    console.log("removed")
}
```
I also added a disabled attribute to prevent unlimited displaying of canvas.
<hr>

### Copying
```javascript
const copyCanvas = async () => {

    // returns canvas
    const canvas = await html2canvas(divToCapture);

    // copies the imgae using Clipboard API
    canvas.toBlob(function (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]);
    });

    alert("You have copied the canvas.");
}
```
<hr>

### Downloading
```javascript
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
```
