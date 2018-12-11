'use strict'

const myApiKey = '035faba8cbec442ea31082b8a26132fb';
const myURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api_key=035faba8cbec442ea31082b8a26132fb';

const xhr = new XMLHttpRequest();
xhr.open('GET', myURL, true);

xhr.onload = () => {
  if (xhr.status === 200) {
    const responseText = JSON.parse(xhr.responseText);
    const myData = responseText.response.docs;
    const contentDestination = document.querySelector('div.container');

    myData.forEach((e, i) => {

      const hl = myData[i].headline.main;
      const snippet = myData[i].snippet;
      const pDate = myData[i]["pub_date"];
      const newDiv = document.createElement('div');
      const newH = document.createElement('h2');
      newH.textContent = hl;
      const newP = document.createElement('p');
      newP.textContent = snippet;
      const newP2 = document.createElement('p');
      newP2.textContent = pDate;

      newDiv.appendChild(newH);
      newDiv.appendChild(newP);
      newDiv.appendChild(newP2);

      contentDestination.appendChild(newDiv);


    });
  }
}
xhr.send();