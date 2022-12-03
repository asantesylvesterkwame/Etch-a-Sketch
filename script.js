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
colorInput.addEventListener('click', function () {
    console.log(colorInput.value)
})


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
const parentContainer = container.parentNode

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    cell.style.cssText = 'border: 1px solid black;';
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    
  };
};
let rowNum = 1
let colNum = 1
makeRows(rowNum,colNum)




let promptPopupButton = document.getElementById('promptPopupButton');
let promptPopupButtonEvent = promptPopupButton.addEventListener('click', function () {
    let gridNumberPrompt = prompt('Enter The Number Of Boxes You Need to Sketch Your Path');
    
    if (gridNumberPrompt === '1') {
      rowNum--;
      colNum--;
      container.innerHTML = '';
      makeRows(1,1)
      

    }
    if (gridNumberPrompt === '2') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(2,2);  
      CON

    };
    if (gridNumberPrompt === '3') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(3,3);
      

    };
    if (gridNumberPrompt === '4') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(4,4);
      

    };
    if (gridNumberPrompt === '5') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(5,5);
      

    };
    if (gridNumberPrompt === '6') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(6,6);
      

    };
    if (gridNumberPrompt === '7') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(7,7);
      

    };
    if (gridNumberPrompt === '8') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(8,8);
      

    };
    if (gridNumberPrompt === '9') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(9,9);
    };
    if (gridNumberPrompt === '10') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(10,10)
      

    };
    if (gridNumberPrompt === '11') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(11,11)
      
    };
    if (gridNumberPrompt === '12') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(12,12);
      

    };
    if (gridNumberPrompt === '13') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(13,13);
      

    };
    if (gridNumberPrompt === '14') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(14,14);
      

    };
    if (gridNumberPrompt === '15') {
      
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(15,15);
      

    };
    if (gridNumberPrompt === '16') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(16,16);
      

    };
    if (gridNumberPrompt === '17') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(17,17);
      

    };
    if (gridNumberPrompt === '18') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(18,18);
      

    };
    if (gridNumberPrompt === '19') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(19,19);
      

    };
    if (gridNumberPrompt === '20') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(20,20)
      

    };

    let gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem);
gridItem.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = colorInput.value;
})
});

gridItem.forEach(item => {
    item.addEventListener('dragover', function () {
        item.style.backgroundColor = colorInput.value;
})
}); 

 


});

let gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem);
gridItem.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = colorInput.value;
})
});

gridItem.forEach(item => {
    item.addEventListener('dragover', function () {
        item.style.backgroundColor = colorInput.value;
})
}); 

 

