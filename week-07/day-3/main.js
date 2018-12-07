'use strict'

const thumbnails = document.querySelector('#thumbnails');

const myImages = [
  {
    title: 'African Ballsack Storck',
    src: 'img/african-ballsack-storck.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
  {
    title: 'Amboseli Flamingos',
    src: 'img/amboseli-flamingos.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
  {
    title: 'Amboseli Flamingos 2',
    src: 'img/amboseli-flamingos2.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
  {
    title: 'Giraffe Couple',
    src: 'img/girraffe-couple.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
  {
    title: 'Male Ostrich',
    src: 'img/male-ostrich.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
  {
    title: 'Savannah with Zebras',
    src: 'img/savannah.jpg',
    description: "Lorizzle ma nizzle dolor crackalackin yo, we gonna chung adipiscing elit. Rizzle sapien velizzle, dope volutpizzle, suscipizzle bling bling, tellivizzle vizzle, funky fresh. Pellentesque eget tortizzle. Sizzle erizzle."
  },
]

//create main image
function createMainImage(index = 0) {

  const oldPicture = document.querySelector('.main');
  const mainImage = document.querySelector('.main-img');
  const newImg = document.createElement('img');

  if (oldPicture) {
    mainImage.removeChild(oldPicture);
  }

  newImg.classList.add('photo', 'main');
  newImg.setAttribute('src', myImages[index].src);
  newImg.setAttribute('alt', myImages[index].title);
  mainImage.appendChild(newImg);
  const picTitle = document.querySelector('h3');
  picTitle.textContent = myImages[index].title;
  const picDescription = document.querySelector('p');
  picDescription.textContent = myImages[index].description;
  const mainDescription = document.querySelector('.img-description');
  mainDescription.appendChild(picTitle);
  mainDescription.appendChild(picDescription);
}
createMainImage();
//populate thumbnails with the for loop below

for (let i = 0; i < myImages.length; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('img-box');
  const newImg = document.createElement('img');
  newImg.classList.add('photo');
  newImg.setAttribute('src', myImages[i].src);
  newImg.setAttribute('alt', myImages[i].title);
  newDiv.appendChild(newImg);
  thumbnails.appendChild(newDiv);
}

//click on thumbnails to change main image

const thumbnailClick = document.querySelectorAll('.img-box');

thumbnailClick.forEach((elem, index) => elem.onclick = () => {
  createMainImage(index);
});

//click on the arrows to change images in main img

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(elem => elem.onclick = () => {
  
  if (elem.classList.contains('point-right')) {
    console.log('jobb');
  } else {
    console.log('bal');
  }
})
