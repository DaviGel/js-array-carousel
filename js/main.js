const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const array = [];
const thumbnailsArray = [];
let counter = 0;
let counterThumbnails = 0;
let index = 0;
const thumbnailsContainer = document.createElement('div');
thumbnailsContainer.classList.add('thumbnailsContainer');

for (let i = 0; i < imagesArray.length; i++) {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `<img src = "img/${imagesArray[i]}" alt = "img${i}">`;
  items.append(element);
  array.push(element);
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.innerHTML = `<img src = "img/${imagesArray[i]}" alt = "img${i}">`;
  thumbnailsContainer.append(thumbnail);
  items.append(thumbnailsContainer);
  thumbnailsArray.push(thumbnail);
  if (i === 0) {
    element.classList.add('active');
  } else {
    thumbnail.classList.add('overlay');
  }
}

const item = document.querySelector('.item');

next.addEventListener('click', function () {
  if (counter < array.length - 1) {
    array[counter].classList.remove('active');
    thumbnailsArray[counter].classList.add('overlay');
    counter++;
    array[counter].classList.add('active');
    thumbnailsArray[counter].classList.remove('overlay');
  } else {
    array[counter].classList.remove('active');
    thumbnailsArray[counter].classList.add('overlay');
    counter = 0;
    array[counter].classList.add('active');
    thumbnailsArray[counter].classList.remove('overlay');
  }
});

prev.addEventListener('click', function () {
  if (counter > 0) {
    array[counter].classList.remove('active');
    thumbnailsArray[counter].classList.add('overlay');
    counter--;
    array[counter].classList.add('active');
    thumbnailsArray[counter].classList.remove('overlay');
  } else {
    array[counter].classList.remove('active');
    thumbnailsArray[counter].classList.add('overlay');
    counter = array.length - 1;
    array[counter].classList.add('active');
    thumbnailsArray[counter].classList.remove('overlay');
  }
});

for (let c = 0; c < array.length; c++) {
  thumbnailsArray[c].addEventListener('click', function () {
    for (let i = 0; i < array.length; i++) {
      if (thumbnailsArray[c].src === array[i].src) {
        array[counter].classList.remove('active');
        thumbnailsArray[counter].classList.add('overlay');
        counter = c;
        array[counter].classList.add('active');
        thumbnailsArray[counter].classList.remove('overlay');
      }
    }
  });
}
