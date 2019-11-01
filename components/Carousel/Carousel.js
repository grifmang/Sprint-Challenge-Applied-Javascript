/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
const imageArray = [];
const imageObject = axios.get('https://dog.ceo/api/breed/pug/images/random/12')
  .then( (response) => {
    imageArray.push(response.data.message)
  })

function createCarousel(imgArr) {
  const carousel = document.createElement('div'),
  leftButton = document.createElement('div'),
  rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = '\u2190';
  rightButton.textContent = '\u2192';

  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  let carouselIndex = 1;
  imageArray.forEach( (image) => {
    const carouselImg = document.createElement('img');
    carouselImg.src = image;
    carousel.appendChild(carouselImg);
  })

  leftButton.addEventListener('click', () => {
    const images = document.getElementsByTagName('.carousel-container img');
    images.style.display('none');
    if (carouselIndex > imageArray.length) {
      carouselIndex %= imageArray.length;
    }
    else if (carouselIndex < 1) {
      carouselIndex = 1;
    }
    else {
      
    }
  })

  rightButton.addEventListener('click', () => {

  })

  return carousel;
}

carouselContainer.appendChild(createCarousel(imageArray));