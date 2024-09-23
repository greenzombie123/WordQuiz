import eventEmitter from "./eventEmitter";

const sections = (() => {
  let currentX: number = 0;
  const lastSlide = 4;
  const firstSlide = 1;
  const resultsSlide = 5;
  const startSlide = 0;
  let currentSlide = 0;

  const sectionContainer = document.querySelector(
    ".sectionContainer",
  ) as HTMLElement;
  const sections = sectionContainer.querySelector(".sections") as HTMLElement;
  const slideWidth: number = +getComputedStyle(sectionContainer).width.slice(
    0,
    -2,
  );

  const changeSlideIndex = (index: -1 | 1 | "reset") => {
    if (index === "reset") {
      currentSlide = 1;
    } else currentSlide += index;
  };

  const changeSlide = () => {
    sections.style.transform = `translateX(${currentX}px)`;
  };

  const moveRight = () => {
    if (currentSlide !== lastSlide) {
      currentX -= slideWidth;
      changeSlideIndex(1);
      changeSlide();
    }
  };

  const moveLeft = () => {
    if (currentSlide !== firstSlide) {
      currentX += slideWidth;
      changeSlideIndex(-1);
      changeSlide();
    }
  };

  const moveToFirstSlide = () => {
    currentX -= slideWidth;
    changeSlide();
    changeSlideIndex(1);
  };

  const moveToResultSection = () => {
    currentX -= slideWidth;
    changeSlide();
    changeSlideIndex(1);
  };

  const moveBackToFirstSlide = () => {
    currentX = -slideWidth;
    changeSlideIndex("reset");
    changeSlide();
  };

  const getCurrentSlide = () => currentSlide;

  return {
    sectionContainer,
    sections,
    moveLeft,
    moveRight,
    moveToFirstSlide,
    getCurrentSlide,
    moveToResultSection,
    moveBackToFirstSlide,
  };
})();

export default sections;
