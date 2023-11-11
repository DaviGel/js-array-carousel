const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 0;
const thumbnailsContainer = document.createElement('div');
thumbnailsContainer.classList.add('thumbnailsContainer');

for (let i = 0; i < imagesArray.length; i++) {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `<img src = "img/${imagesArray[i]}" alt = "img${i}">`;
  items.append(element);
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.innerHTML = `<img src = "img/${imagesArray[i]}" alt = "img${i}">`;
  thumbnailsContainer.append(thumbnail);
  items.append(thumbnailsContainer);
  if (i === 0) {
    element.classList.add('active');
  } else {
    thumbnail.classList.add('overlay');
  }
}

const domItems = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');

next.addEventListener('click', function () {
  if (counter < domItems.length - 1) {
    domItems[counter].classList.remove('active');
    domThumbnails[counter].classList.add('overlay');
    counter++;
    domItems[counter].classList.add('active');
    domThumbnails[counter].classList.remove('overlay');
  } else {
    domItems[counter].classList.remove('active');
    domThumbnails[counter].classList.add('overlay');
    counter = 0;
    domItems[counter].classList.add('active');
    domThumbnails[counter].classList.remove('overlay');
  }
});

prev.addEventListener('click', function () {
  if (counter > 0) {
    domItems[counter].classList.remove('active');
    domThumbnails[counter].classList.add('overlay');
    counter--;
    domItems[counter].classList.add('active');
    domThumbnails[counter].classList.remove('overlay');
  } else {
    domItems[counter].classList.remove('active');
    domThumbnails[counter].classList.add('overlay');
    counter = domItems.length - 1;
    domItems[counter].classList.add('active');
    domThumbnails[counter].classList.remove('overlay');
  }
});

for (let c = 0; c < domItems.length; c++) {
  domThumbnails[c].addEventListener('click', function () {
    for (let i = 0; i < domItems.length; i++) {
      if (domThumbnails[c].src === domItems[i].src) {
        domItems[counter].classList.remove('active');
        domThumbnails[counter].classList.add('overlay');
        counter = c;
        domItems[counter].classList.add('active');
        domThumbnails[counter].classList.remove('overlay');
      }
    }
  });
}
