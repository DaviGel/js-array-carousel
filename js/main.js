/*
<div class="container">
  <div class="items">
    <div class="item active">
      <img src="./img/01.jpg" alt="" />
    </div>
    <div class="prev"></div>
    <div class="next"></div>
  </div>
</div>
*/

const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');

for (let i = 0; i < imagesArray.length; i++) {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `<img src = "img/${imagesArray[i]}" alt = "img${i}">`;
  if (i === 0) {
    element.classList.add('active');
  }
  items.append(element);
}
