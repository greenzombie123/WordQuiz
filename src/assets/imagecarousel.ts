export type ImageStrip = {
  imageStrip: HTMLDivElement;
  numberOfImages: number;
  images: HTMLDivElement[];
};

export type imageCarouselData = {
  imageFrame: HTMLDivElement;
  imageStrip: ImageStrip;
  leftArrowButton: HTMLButtonElement;
  rightArrowButton: HTMLButtonElement;
  navigationButtons: HTMLSpanElement[];
};

const getImages = (): HTMLDivElement[] => {
  const imageContainers = Array.from(
    document.querySelectorAll(".imageContainer") as NodeList,
  );

  return imageContainers as HTMLDivElement[];
};

const getImageStrip = (): ImageStrip => {
  const imageStrip = document.querySelector(".imageStrip") as HTMLDivElement;
  const images = getImages();
  const numberOfImages = images.length;

  return { imageStrip, numberOfImages, images };
};

const getImageCarousel = (): imageCarouselData => {
  const imageStrip = getImageStrip();
  const imageFrame = document.querySelector(".imageFrame") as HTMLDivElement;
  const leftArrowButton = document.querySelector(
    ".leftArrowButton",
  ) as HTMLButtonElement;
  const rightArrowButton = document.querySelector(
    ".rightArrowButton",
  ) as HTMLButtonElement;
  const navigationButtons = Array.from(
    document.querySelectorAll(".navigationButton") as NodeList,
  ) as HTMLSpanElement[];

  return {
    imageStrip,
    imageFrame,
    leftArrowButton,
    rightArrowButton,
    navigationButtons,
  };
};

const setUpImageCarousel = () => {
  const {
    imageStrip,
    imageFrame,
    leftArrowButton,
    rightArrowButton,
    navigationButtons,
  } = getImageCarousel();

  const slideWidth: number = +getComputedStyle(imageFrame).width.slice(0, -2);
  let currentX: number = 0;

  const moveRight = () => {
    currentX -= slideWidth;

    console.log(currentX);
    imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
  };

  const moveLeft = () => {
    currentX += slideWidth;
    console.log(currentX);
    imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
  };

  rightArrowButton.addEventListener("click", moveRight);

  leftArrowButton.addEventListener("click", moveLeft);

  navigationButtons.forEach((navigationButton, index) => {
    navigationButton.addEventListener("click", () => {
      imageStrip.imageStrip.style.transform = `translateX(${-slideWidth * index}px)`;
    });
  });

  const timeInterval: number = 2000;
  const endPoint = -slideWidth * (imageStrip.numberOfImages - 1);

  const switchSlides = () => {
    if (currentX === endPoint) {
      console.log(1);
      return
    }

    setTimeout(() => {
      currentX -= slideWidth;
      imageStrip.imageStrip.style.transform = `translateX(${currentX}px)`;
      switchSlides();
    }, timeInterval);
  };

  switchSlides();
};

export default setUpImageCarousel;
