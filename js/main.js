const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let counter = 0;
let item = '';
let thumbnail = '';

for (let i = 0; i < imagesArray.length; i++) {
  if (i === 0) {
    item += `<div class = "item active"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
    thumbnail += `<div class = "thumbnail"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
  } else {
    item += `<div class = "item"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
    thumbnail += `<div class = "thumbnail overlay"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
  }
}

items.innerHTML +=
  item + `<div class = "thumbnailsContainer">${thumbnail}</div>`;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const domItems = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');

next.addEventListener('click', function () {
  domItems[counter].classList.remove('active');
  domThumbnails[counter].classList.add('overlay');
  if (counter < domItems.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  domItems[counter].classList.add('active');
  domThumbnails[counter].classList.remove('overlay');
});

prev.addEventListener('click', function () {
  domItems[counter].classList.remove('active');
  domThumbnails[counter].classList.add('overlay');
  if (counter > 0) {
    counter--;
  } else {
    counter = domItems.length - 1;
  }
  domItems[counter].classList.add('active');
  domThumbnails[counter].classList.remove('overlay');
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
