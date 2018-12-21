'use strict'

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    getMyData(response);
  }
};

xhr.open('GET', '/fulldata');
xhr.send();
const myTable = document.querySelector('.my-table');

const getMyData = (data) => {

  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuth = document.createElement('th');
  const thCat = document.createElement('th');
  const thPub = document.createElement('th');
  const thPrice = document.createElement('th');
  const selectCategory = document.querySelector('select#category');
  const selectPub = document.querySelector('select#publisher');
  let publishers = [];
  let categories = [];

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
    // const tdButton = document.createElement('td');
    // const button = document.createElement('button');
    tdTitle.textContent = e.book_name;
    tdAuth.textContent = e.aut_name;
    tdCat.textContent = e.cate_descrip;
    tdPub.textContent = e.pub_name;
    tdPrice.textContent = e.book_price;
    // button.textContent = 'Delete';
    // button.setAttribute('id', e.book_name);
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuth);
    tr.appendChild(tdCat);
    tr.appendChild(tdPub);
    tr.appendChild(tdPrice);
    // tdButton.appendChild(button);
    // tr.appendChild(tdButton);
    myTable.appendChild(tr);

    //add cetegories to category array
    if(categories.indexOf(e.cate_descrip) === -1){
      categories.push(e.cate_descrip);
    }
    //add publishers to publisher array
    if(publishers.indexOf(e.pub_name) === -1){
      publishers.push(e.pub_name);
    }
    
  });

  //create category options
  categories.forEach(elem => {
    let option = document.createElement('option');
    option.textContent = elem;
    option.setAttribute('value', elem);
    selectCategory.appendChild(option);
  })
 
  publishers.forEach(elem => {
  let option = document.createElement('option');
    option.textContent = elem;
    option.setAttribute('value', elem);
    selectPub.appendChild(option);
  })


}

