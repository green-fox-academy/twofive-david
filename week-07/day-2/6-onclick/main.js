'use strict'

const myPage = document.querySelector('body');
const foodArray = ['bread', 'milk', 'orange', 'tomato'];

let newDiv = document.createElement('div');
let newUlist = document.createElement('ul');
newUlist.style.padding = 0;

let myContainer = myPage.appendChild(newDiv).appendChild(newUlist);


for (let i = 0; i < foodArray.length; i++) {
  let newLi = document.createElement('li');
  
  newLi.style.listStyleType = 'none';
  newLi.textContent = foodArray[i];
  newLi.style.fontSize = '20px';
  myContainer.appendChild(newLi);

}





//   1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
//   2, Achive the same design by css
//   3, Try not to use css classes
//   4, Add some functionality to the buttons
//       - If "Up" is clicked the selection should move up by one
//       - If "Down" is clicked the selection should move down by one
//       - If "X" is clicked the selected item should be removed and the first item should be selected
//       - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
//   5, Check all the edge cases, no error should be printed to the console
