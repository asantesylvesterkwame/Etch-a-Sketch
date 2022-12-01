let body = document.body;

/*let gridBoxTitle = document.createElement('h3');
body.append(gridBoxTitle);
gridBoxTitle.innerHTML = 'SKETCH YOUR PATH TO DOOM!';
gridBoxTitle.style.cssText = 'color: red; font-size: 48px; text-align: center;';

let gridBoxContainer = document.createElement('div');
body.append(gridBoxContainer);
gridBoxContainer.style.cssText = 'display: grid; margin: 0  auto; border: 1px solid black; width: 500px; height: 500px;';

/*let gridBoxItem = document.createElement('div');
gridBoxContainer.appendChild(gridBoxItem);
gridBoxItem.style.border = ' 1px solid black';*/

let colorInputTitle = document.createElement('h3');
body.append(colorInputTitle);
colorInputTitle.innerHTML = 'SELECT YOUR COLOR';
colorInputTitle.style.cssText = 'text-align: center; font-size: 24px;';

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

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16,16);
 
