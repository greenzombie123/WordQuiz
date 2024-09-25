const loadingBox = document.querySelector(".loadingBox") as HTMLDivElement;
const text = loadingBox.querySelector("p") as HTMLParagraphElement;
const loadingArrow = loadingBox.querySelector(
  ".loadingArrow",
) as HTMLSpanElement;

const reveal = () => (loadingBox.style.display = "block");
const hide = () => (loadingBox.style.display = "none");

export { reveal, hide };
