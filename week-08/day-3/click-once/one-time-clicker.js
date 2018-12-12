'use strict'

const butt = document.querySelector('button.myBtn');

//button log timestamp, only clickable once - first solution
butt.addEventListener('click', (e) => {
  console.log(e.timeStamp)
  butt.setAttribute('disabled', '');
});


//button log timestamp, only clickable once - second solution

butt.addEventListener('click', function getTime(e) {
  console.log(e.timeStamp);
  butt.removeEventListener('click', getTime);

})


