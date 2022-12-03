let body = document.body;
body.style.cssText = 'background-color: lightblue;'


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
container.style.cssText = 'border: 100px solid rgb(224, 44, 44); border-radius: 100px; width: auto;'
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
    let gridNumberPrompt = prompt('Enter The Number Of Boxes You Need to Sketch Your Path. Just Type in a number FROM 1 TO 50 ');
    
    if (gridNumberPrompt === '1') {
      rowNum--;
      colNum--;
      container.innerHTML = '';
      makeRows(1,1)
      

    }else if (gridNumberPrompt === '2') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(2,2);  
      

    }
    else if (gridNumberPrompt === '3') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(3,3);
      

    }else if (gridNumberPrompt === '4') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(4,4);
      

    }
    else if (gridNumberPrompt === '5') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(5,5);
      

    }
    else if (gridNumberPrompt === '6') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(6,6);
      

    }else if (gridNumberPrompt === '7') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(7,7);
      

    }else if (gridNumberPrompt === '8') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(8,8);
      

    }else if (gridNumberPrompt === '9') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(9,9);
    }else if (gridNumberPrompt === '10') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(10,10)
      

    }else if (gridNumberPrompt === '11') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(11,11)
      
    }else if (gridNumberPrompt === '12') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(12,12);
      

    }else if (gridNumberPrompt === '13') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(13,13);
      

    }else if(gridNumberPrompt === '14') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(14,14);
      

    }else if(gridNumberPrompt === '15') {
      
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(15,15);
      

    }else if(gridNumberPrompt === '16') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(16,16);
      

    }else if(gridNumberPrompt === '17') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(17,17);
      

    }else if(gridNumberPrompt === '18') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(18,18);
      

    }else if(gridNumberPrompt === '19') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(19,19);
      

    }else if(gridNumberPrompt === '20') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(20,20);
    }else if(gridNumberPrompt === '21') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(21,21);
    }else if(gridNumberPrompt === '22') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(22,22);
    }else if(gridNumberPrompt === '23') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(23,23);
    }else if(gridNumberPrompt === '24') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(24,24);
    }else if(gridNumberPrompt === '25') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(25,25);
    }else if(gridNumberPrompt === '26') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(26,26);
    }else if(gridNumberPrompt === '27') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(27,27);
    }else if(gridNumberPrompt === '28') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(28,28);
    }else if (gridNumberPrompt === '29') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(29,29);
    }else if(gridNumberPrompt === '30') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(30,30);
    }else if(gridNumberPrompt === '31') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(31,31);
    }else if(gridNumberPrompt === '32') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(32,32);
    }else if(gridNumberPrompt === '33') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(33,33);
    }else if(gridNumberPrompt === '34') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(34,34);
    }else if(gridNumberPrompt === '35') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(35,35);
    }else if(gridNumberPrompt === '36') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(36,36);
    }else if(gridNumberPrompt === '37') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(37,37);
    }else if(gridNumberPrompt === '38') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(38,38);
    }else if(gridNumberPrompt === '39') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(39,39);
    }else if(gridNumberPrompt === '40') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(40,40);
    }else if(gridNumberPrompt === '41') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(41,41);
    }else if(gridNumberPrompt === '42') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(42,42);
    }else if(gridNumberPrompt === '43') {
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
    }else if(gridNumberPrompt === '47') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(47,47);
    }else if(gridNumberPrompt === '48') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(48,48);
    }else if(gridNumberPrompt === '49') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(49,49);
    }else if(gridNumberPrompt === '50') {
      rowNum --;
      colNum --;
      container.innerHTML = '';
      makeRows(50,50);
    }
    if (gridNumberPrompt === '') {
      alert('Just Type in a number FROM 1 TO 50');
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
