import "./dropdown.css";

export type CallBackLink = {
  name: string;
  callback: (e: Event) => void;
  path?: never;
};

export type PathLink = {
  name: string;
  callback?: never;
  path: string;
};

export type Link = CallBackLink | PathLink;

// type cssRules = {
//   backGroundColor: string;
//   fontSize: string;
//   color: string;
// };

const setUpDropDown = (
  buttonName: HTMLButtonElement | string,
  links: Link[],
) => {
  let button: HTMLButtonElement;

  if (typeof buttonName === "string")
    button = document.querySelector(buttonName)!;
  else button = buttonName;

  button.className = "dropDownButton";
  button.type = "button";
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");

  // Create the list that will hold the links
  const list = document.createElement("ul")!;
  list.setAttribute("role", "menu");
  list.className = "list";
  list.style.display = "none";
  const buttonCSS: CSSStyleDeclaration = getComputedStyle(button);
  list.style.top = `${buttonCSS.height}`;

  links.forEach((link) => {
    const listItem = document.createElement("li")!;
    const linkElement = document.createElement("a")!;

    linkElement.className = "link";
    linkElement.textContent = link.name;
    linkElement.setAttribute("role", "menuitem");

    if (link.path) {
      linkElement.href = link.path;
      linkElement.target = "_blank"; // Opens in a new tab
    }

    if (link.callback)
      linkElement.addEventListener("click", (e) => {
        link.callback!(e);
        e.preventDefault();
      });

    listItem.appendChild(linkElement);
    list.appendChild(listItem);
  });

  button.appendChild(list);

  const toggleDropDown = (isVisible: boolean) => {
    if (isVisible) {
      list.style.display = "flex";
      button.setAttribute("aria-expanded", "true");
    } else {
      list.style.display = "none";
      button.setAttribute("aria-expanded", "false");
    }
  };

  button.addEventListener("click", () => {
    const isVisible = list.style.display === "flex";
    toggleDropDown(!isVisible);
  });

  const onClickOutside = (e: Event) => {
    if (list && !list.contains(e.target as Node) && e.target !== button) {
      toggleDropDown(false);
    }
  };

  window.addEventListener("click", onClickOutside);

  // Return a cleanup function to remove event listeners if needed
  return () => {
    window.removeEventListener("click", onClickOutside);
  };
};

export default setUpDropDown;
