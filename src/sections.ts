import eventEmitter from "./eventEmitter";

const sections = (() => {
  let currentX: number = 0;
  const lastSlide = 4;
  const firstSlide = 1;
  let currentSlide = 1;

  const sectionContainer = document.querySelector(
    ".sectionContainer",
  ) as HTMLElement;
  const sections = sectionContainer.querySelector(".sections") as HTMLElement;
  const slideWidth: number = +getComputedStyle(sectionContainer).width.slice(
    0,
    -2,
  );

  const changeSlideIndex = (index: -1 | 1) => {
    currentSlide += index;
  };

  const changeSlide = () => {
    sections.style.transform = `translateX(${currentX}px)`;
  };

  const moveRight = () => {
    if (currentSlide === lastSlide) moveToResultSection()
    else if (currentSlide !== lastSlide) {
      currentX -= slideWidth;
      changeSlideIndex(1);
      changeSlide()
      if(currentSlide !== firstSlide){
        eventEmitter.emitEvent('movedFrom1stSlide')
      }
      if(currentSlide === lastSlide){
        eventEmitter.emitEvent('movedToLastSlide')
      }
    }
  };

  const moveLeft = () => {
    if (currentSlide !== firstSlide) {
      currentX += slideWidth;
      changeSlideIndex(-1);
      changeSlide()
      if(currentSlide === firstSlide){
        eventEmitter.emitEvent('movedTo1stSlide')
      }
    }
  };

  const moveToFirstSlide = ()=> {
    currentX -= slideWidth;
      changeSlide()
  }

  const moveToResultSection = ()=>{
      currentX -= slideWidth;
      changeSlide()
  }

  const getCurrentSlide = ()=> currentSlide

  return { sectionContainer, sections, moveLeft, moveRight, moveToFirstSlide, getCurrentSlide };
})();

export default sections;
