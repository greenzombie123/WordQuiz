import setUpDropDown from "./dropdown";
import setUpImageCarousel from "./imagecarousel";
// import "./index.css";
import "./imagecarousel.css";

const button = document.querySelector("button")!;
setUpDropDown(button, [
  {
    name: "MDN",
    path: "https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry",
  },
  { name: "Home", callback: () => console.log("HELLO!") },
]);

setUpImageCarousel()
