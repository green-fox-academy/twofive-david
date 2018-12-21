'use strict'

const form = document.querySelector('form');
const myTable = document.querySelector('.my-table');

//XML call 1 to create the table

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    getMyData(response);
  }
};
xhr.open('GET', '/fulldata');
xhr.send();

//XML call 2 to get list of categories

const xhr2 = new XMLHttpRequest();
xhr2.onload = () => {
  if (xhr2.status === 200) {
    const response = JSON.parse(xhr2.response);
    createCategories(response);
  }
}
xhr2.open('GET', '/categories');
xhr2.send();

const createCategories = (data) => {
  const selectCategory = document.querySelector('select#category');
  let baseOption = document.createElement('option');
  baseOption.textContent = 'All';
  baseOption.setAttribute('value', 'all');
  selectCategory.appendChild(baseOption);

  data.forEach(elem => {
    let option = document.createElement('option');
    option.textContent = elem.cate_descrip;
    option.setAttribute('value', elem.cate_descrip);
    selectCategory.appendChild(option);
  })
}

//XML call 3 - to get list of publishers 

const xhr3 = new XMLHttpRequest();
xhr3.onload = () => {
  if (xhr3.status === 200) {
    const response = JSON.parse(xhr3.response);
    createPublishers(response);
  }
}
xhr3.open('GET', '/publishers');
xhr3.send();

const createPublishers = (data) => {

  const selectPub = document.querySelector('select#publisher');
  let basePubOption = document.createElement('option');
  basePubOption.textContent = 'All';
  basePubOption.setAttribute('value', 'all');
  selectPub.appendChild(basePubOption);

  data.forEach(elem => {
    let option = document.createElement('option');
    option.textContent = elem.pub_name;
    option.setAttribute('value', elem.pub_name);
    selectPub.appendChild(option);
  })
}

const getMyData = (data) => {

  myTable.innerHTML = "";

  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuth = document.createElement('th');
  const thCat = document.createElement('th');
  const thPub = document.createElement('th');
  const thPrice = document.createElement('th');

  //create table
  thTitle.textContent = "Title";
  thAuth.textContent = "Author";
  thCat.textContent = "Category";
  thPub.textContent = "Publisher";
  thPrice.textContent = "Price";
  tr.appendChild(thTitle);
  tr.appendChild(thAuth);
  tr.appendChild(thCat);
  tr.appendChild(thPub);
  tr.appendChild(thPrice);
  myTable.appendChild(tr);

  data.forEach(e => {

    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuth = document.createElement('td');
    const tdCat = document.createElement('td');
    const tdPub = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdTitle.textContent = e.book_name;
    tdAuth.textContent = e.aut_name;
    tdCat.textContent = e.cate_descrip;
    tdPub.textContent = e.pub_name;
    tdPrice.textContent = e.book_price;
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuth);
    tr.appendChild(tdCat);
    tr.appendChild(tdPub);
    tr.appendChild(tdPrice);
    myTable.appendChild(tr);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const catSelector = document.querySelector('select#category');
  const pubSelector = document.querySelector('select#publisher');
  const minPrice = document.querySelector('input#min_price');
  const maxPrice = document.querySelector('input#max_price');

  xhr.open('GET', `http://localhost:3000/fulldata?${catSelector.id}=${catSelector.value}&${pubSelector.id}=${pubSelector.value}&${minPrice.id}=${minPrice.value}&${maxPrice.id}=${maxPrice.value}`);
  xhr.send();
});