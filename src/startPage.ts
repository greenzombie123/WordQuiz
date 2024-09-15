import getWords from "./websterAPI";

const mainButton = document.querySelector('.mainButton')

mainButton?.addEventListener('click', getWords)
