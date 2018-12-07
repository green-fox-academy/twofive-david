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

const thumbnailClick = document.querySelectorAll('.img-box');


thumbnailClick.forEach((elem, index) => elem.onclick = () => {
  const thisPicture = myImages[index];
  const oldPicture = document.querySelector('.main');
  const picTitle = document.querySelector('h3');
  const picDescription = document.querySelector('p');

  oldPicture.setAttribute('src', thisPicture.src);
  oldPicture.setAttribute('alt', thisPicture.title);
  picTitle.textContent = thisPicture.title;
  picDescription.textContent = thisPicture.description;
});
