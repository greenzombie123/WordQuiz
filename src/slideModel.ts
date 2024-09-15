let currentX: number = 0;
let slideWidth: number = 0;
let slideNumber: number = 0;
const lastSlide = 4;
const firstSlide = 1;

const setSlideWidth = (width: number) => {
  slideWidth = width;
};

const moveRight = () => {
  if (!lastSlide) currentX -= slideWidth;
};

const moveLeft = () => {
  if (!firstSlide) currentX += slideWidth;
};

// const setUpImageCarousel = () => {
//   const {
//     imageStrip,
//     imageFrame,
//     leftArrowButton,
//     rightArrowButton,
//     navigationButtons,
//   } = getImageCarousel();

//   const slideWidth: number = +getComputedStyle(imageFrame).width.slice(0, -2);
//   let currentX: number = 0;

//   const moveRight = () => {
//     currentX -= slideWidth;

//     console.log(currentX);
//     imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
//   };

//   const moveLeft = () => {
//     currentX += slideWidth;
//     console.log(currentX);
//     imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
//   };

//   rightArrowButton.addEventListener("click", moveRight);

//   leftArrowButton.addEventListener("click", moveLeft);

//   navigationButtons.forEach((navigationButton, index) => {
//     navigationButton.addEventListener("click", () => {
//       imageStrip.imageStrip.style.transform = `translateX(${-slideWidth * index}px)`;
//     });
//   });

//   const timeInterval: number = 2000;
//   const endPoint = -slideWidth * (imageStrip.numberOfImages - 1);

//   const switchSlides = () => {
//     if (currentX === endPoint) {
//       console.log(1);
//       return
//     }

//     setTimeout(() => {
//       currentX -= slideWidth;
//       imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
//       switchSlides();
//     }, timeInterval);
//   };

//   switchSlides();
// };

// export default setUpImageCarousel;
