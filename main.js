const nav = document.querySelector('header .mobile-nav');

function toggleNavVisibility() {
  nav.classList.toggle('visible');
}

console.log(nav);


const marginValue = 530;
let currentSlide = 0;
const categoriesContainer = document.querySelector('.avatars');


function doSlide(direction) {
  currentSlide += direction;
  if (currentSlide > 4) {
    currentSlide = 0;
  }
  const newFirstCard = document.querySelector('.ava:first-child');
  const newLastCard = document.querySelector('.ava:last-child');
  
  
  if (direction > 0 ) {
    const newMargin =   newFirstCard.style.marginLeft = '-530px';
    setTimeout(() => {
        categoriesContainer.appendChild(newFirstCard);
        newFirstCard.style.marginLeft = '0';
      }, 400);
  }
  else{
    const newMargin =   newFirstCard.style.marginLeft = '530px';
    setTimeout(() => {
        categoriesContainer.prepend(newLastCard);
        newFirstCard.style.marginLeft = '0';
    }, 400);
}
}

