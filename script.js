let body = document.body;

let colorButtonDiv = document.createElement('div');
body.append(colorButtonDiv);

let colorInput = document.createElement('input');
// colorButtonDiv.setAttribute('align', 'center');
colorButtonDiv.style.cssText = 'display: flex; justify-content: center;';
colorButtonDiv.appendChild(colorInput);
colorInput.setAttribute('type', 'color');
colorInput.style.cssText = 'box-shadow: 6px 4px 2px; border-radius: 10px; width: 100px; height: 100px;';

let eraserIndicator = document.createElement('h3');
body.append(eraserIndicator);
eraserIndicator.innerHTML = 'THIS IS YOUR ERASER';
eraserIndicator.style.cssText = 'border-radius: 10px; text-align: center; font-size: 24px;';

let eraserButtonContainer = document.createElement('div');
body.append(eraserButtonContainer);
eraserButtonContainer.style.cssText = 'display: flex; justify-content: center;';

let eraserButton = document.createElement('button');
eraserButtonContainer.appendChild(eraserButton);
eraserButton.innerText = 'ERASER';
eraserButton.style.cssText = 'box-shadow: 6px 4px 2px; font-size: 24px; font-family: arial; width: 150px; height: 50px;'

let clearButtonHeader = document.createElement('h3');
body.append(clearButtonHeader);
clearButtonHeader.innerHTML = 'CLICK TO CLEAR YOUR PATH';
clearButtonHeader.style.cssText = 'font-size: 24px; text-align: center;';

let clearButtonContainer = document.createElement('div');
body.append(clearButtonContainer);
clearButtonContainer.style.cssText = 'display: flex; justify-content: center;'

let clearButton = document.createElement('button');
clearButtonContainer.appendChild(clearButton);
clearButton.style.cssText = 'box-shadow: 6px 4px 2px; width: 150px; height: 50px; font-size: 24px; font-family: arial;'
clearButton.innerHTML = 'CLEAR';

let gridBoxTitle = document.createElement('h3');
body.append(gridBoxTitle);
gridBoxTitle.innerHTML = 'SKETCH YOUR PATH TO HELL!';
gridBoxTitle.style.cssText = 'color: red; font-size: 48px; text-align: center;';

let gridBoxContainer = document.createElement('div');
body.append(gridBoxContainer);
gridBoxContainer.style.cssText = 'display: grid; margin: 0  auto; border: 1px solid black; width: 500px; height: 500px;';

let gridBoxItem = document.createElement('div');
gridBoxContainer.appendChild(gridBoxItem);
gridBoxItem.style.border = ' 1px solid black';

let gridAdjustTitle = document.createElement('h3');
body.append(gridAdjustTitle);
gridAdjustTitle.innerHTML = 'ADJUST NUMBER OF BOXES';
gridAdjustTitle.style.cssText = 'text-align: center; font-size: 24px;';

let gridAdjusterDiv = document.createElement('div');
body.append(gridAdjusterDiv);
gridAdjusterDiv.style.cssText = 'display: flex; justify-content: center;'

let gridAdjusterButtonDiv = document.createElement('button');
gridAdjusterDiv.appendChild(gridAdjusterButtonDiv);
gridAdjusterButtonDiv.style.cssText = 'font-size: 36px; border-radius: 20px; width: 150px; height: auto;'
gridAdjusterButtonDiv.innerHTML = '1x1';


let gridAdjuster = document.createElement('input');
gridAdjusterButtonDiv.appendChild(gridAdjuster);
gridAdjuster.setAttribute('type', 'range');
gridAdjuster.setAttribute('value', 0);
let gridAdjusterValue = 0

gridAdjuster.addEventListener('input', function () {
    gridAdjusterValue += 1;
    if (gridAdjusterValue) {
        
    }
    console.log(gridAdjusterValue)
})






