//giphy API: rDWTzRS0iP5df4al0FbeklgfwboUta55

const myKey = 'http://api.giphy.com/v1/gifs/search?q=big+lebowski&api_key=rDWTzRS0iP5df4al0FbeklgfwboUta55&limit=16'
const myAnchor = document.createElement('a');
const scr = document.querySelector('script');
const myDiv = document.querySelector('.container');

const xhr = new XMLHttpRequest();
xhr.open('GET', myKey, true);

xhr.onload = function () {
  const myData = JSON.parse(xhr.responseText).data;
  console.log(myData[0]);

  myData.forEach((el, i) => {
    const myFrame = document.createElement('img');

    myFrame.setAttribute('src', myData[i].images['480w_still'].url);
    myFrame.setAttribute('width', 300);
    myFrame.setAttribute('height', 200);
    myDiv.appendChild(myFrame);

    myFrame.onclick = function () {
      myFrame.setAttribute('src', myData[i].images['downsized_medium'].url);
    }
  })
}
xhr.send();