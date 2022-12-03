let body = document.body;



let colorInputTitle = document.createElement('h3');
body.append(colorInputTitle);
colorInputTitle.innerHTML = 'SELECT YOUR COLOR';
colorInputTitle.style.cssText = 'text-align: center; font-size: 24px;';

let colorButtonDiv = document.createElement('div');
body.append(colorButtonDiv);

let colorInput = document.createElement('input');
colorButtonDiv.style.cssText = 'display: flex; justify-content: center;';
colorButtonDiv.appendChild(colorInput);
colorInput.setAttribute('type', 'color');
colorInput.style.cssText = 'box-shadow: 6px 4px 2px; border-radius: 10px; width: 100px; height: 100px;';
colorInput.addEventListener('click', function () {
    console.log(colorInput.value)
})


let eraserIndicator = document.createElement('h3');
body.append(eraserIndicator);
eraserIndicator.innerHTML = 'THIS IS YOUR ERASER <br/> CLICK/TAP TO ACTIVATE <br/> DOUBLE CLICK/TAP TO DEACTIVATE';
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
clearButton.addEventListener('click', function () {
  gridItem.forEach(item => {
    
        item.style.backgroundColor = 'white';

});
});

eraserButton.addEventListener('click', function () {
  gridItem.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = 'white';
})
});

gridItem.forEach(item => {
    item.addEventListener('dragover', function () {
        item.style.backgroundColor = 'white';
})
}); 

});
 
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
let rowNum = 16
let colNum = 16
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
      makeRows(20,20);
    };
    if (gridNumberPrompt === '21') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(21,21);
    };
    if (gridNumberPrompt === '22') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(22,22);
    };
    if (gridNumberPrompt === '23') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(23,23);
    };
    if (gridNumberPrompt === '24') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(24,24);
    };
    if (gridNumberPrompt === '25') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(25,25);
    };
    if (gridNumberPrompt === '26') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(26,26);
    };
    if (gridNumberPrompt === '27') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(27,27);
    };
    if (gridNumberPrompt === '28') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(28,28);
    };
    if (gridNumberPrompt === '29') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(29,29);
    };
    if (gridNumberPrompt === '30') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(30,30);
    };
    if (gridNumberPrompt === '31') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(31,31);
    };
    if (gridNumberPrompt === '32') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(32,32);
    };
    if (gridNumberPrompt === '33') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(33,33);
    };
    if (gridNumberPrompt === '34') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(34,34);
    };
    if (gridNumberPrompt === '35') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(35,35);
    };
    if (gridNumberPrompt === '36') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(36,36);
    };
    if (gridNumberPrompt === '37') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(37,37);
    };
    if (gridNumberPrompt === '38') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(38,38);
    };
    if (gridNumberPrompt === '39') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(39,39);
    };
    if (gridNumberPrompt === '40') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(40,40);
    };
    if (gridNumberPrompt === '41') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(41,41);
    };
    if (gridNumberPrompt === '42') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(42,42);
    };
    if (gridNumberPrompt === '43') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(43,43);
    };
    if (gridNumberPrompt === '44') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(44,44);
    };
    if (gridNumberPrompt === '45') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(45,45);
    };
    if (gridNumberPrompt === '46') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(46,46);
    };
    if (gridNumberPrompt === '47') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(47,47);
    };
    if (gridNumberPrompt === '48') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(48,48);
    };
    if (gridNumberPrompt === '49') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(49,49);
    };
    if (gridNumberPrompt === '50') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(50,50);
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
});
}); 

clearButton.addEventListener('click', function () {
  gridItem.forEach(item => {
    
        item.style.backgroundColor = 'white';

});
});

eraserButton.addEventListener('click', function () {
  gridItem.forEach(item => {
    item.addEventListener('click', function () {
        item.style.backgroundColor = 'white';
})
});

gridItem.forEach(item => {
    item.addEventListener('dragover', function () {
        item.style.backgroundColor = 'white';
})
}); 

});

eraserButton.addEventListener('dblclick', function () {
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

})

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

eraserButton.addEventListener('dblclick', function () {
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

})
