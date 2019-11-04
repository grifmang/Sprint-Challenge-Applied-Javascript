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
const imageArray = ['./assets/carousel/mountains.jpeg','./assets/carousel/computer.jpeg','./assets/carousel/trees.jpeg','./assets/carousel/turntable.jpeg'];
// const imageObject = axios.get('https://dog.ceo/api/breed/pug/images/random/12')
//   .then( (response) => {
//     imageArray.push(response.data.message)
//   })

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

  imgArr.forEach( (image) => {
    const carouselImg = document.createElement('img');
    carouselImg.classList.add('hide-img');
    carouselImg.src = image;
    carousel.appendChild(carouselImg);
  })
  
  return carousel;
}

carouselContainer.appendChild(createCarousel(imageArray));

  // Logic should probably go
  // imageArray.forEach((element) => {
  //   console.log(element);
  // })
  let carouselIndex = 0;
  const images = document.querySelectorAll('.carousel img');
  console.log(images);
  let activeImg = images[carouselIndex];
  activeImg.classList.remove('hide-img');
  activeImg.classList.add('show-img');

  document.querySelector('.left-button').addEventListener('click', () => {
    if (carouselIndex < 0) {
      carouselIndex = images.length - 1;
    } else {
      carouselIndex -= 1;
    }
    activeImg.classList.add('hide-img');
    activeImg.classList.remove('show-img');
    activeImg = images[carouselIndex];
    activeImg.classList.remove('hide-img');
    activeImg.classList.add('show-img');

  })

  document.querySelector('.right-button').addEventListener('click', () => {
    if (carouselIndex > images.length - 1) {
      carouselIndex = 0;
    } else {
      carouselIndex += 1;
    }
    activeImg.classList.add('hide-img');
    activeImg.classList.remove('show-img');
    activeImg = images[carouselIndex];
    activeImg.classList.remove('hide-img');
    activeImg.classList.add('show-img');

  })

