"use strict"
import images from './gallery-items.js'
let imgIndex = 0;
let galleryList = document.querySelector(".gallery");
let lightBoxImg = document.querySelector(".lightbox__image");
let lightBox = document.querySelector(".lightbox");
let closeBtn = lightBox.querySelector("button");
let lightboxOverlay = lightBox.querySelector(".lightbox__overlay");

let itemsHTML = "";
images.forEach((el) => {
    itemsHTML += `
    <li class="gallery__item"><a class="gallery__link" href="${el.original}">
  <img class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
      data-index="${imgIndex++}"
    /></a></li>`;
});

let maxIndex = --imgIndex;
imgIndex = 0;

galleryList.insertAdjacentHTML("afterbegin", itemsHTML);
galleryList.addEventListener("click", () => {
  event.preventDefault();
  const target = event.target;
  imgIndex = +target.getAttribute("data-index");
  let largeImgUrl = target.getAttribute("data-source");
  
  lightBoxImg.setAttribute("src", largeImgUrl);
  lightBox.classList.add("is-open");
});

const close = function () {
  lightBoxImg.removeAttribute("src");
  lightBox.classList.remove("is-open");
};

closeBtn.addEventListener("click", close);


window.addEventListener("keydown", () => {
  if (!lightBox.classList.contains("is-open")) return;
  if (event.keyCode === 27) close();
  else if (event.keyCode === 37) {
    imgIndex--;
    if (imgIndex === 0) imgIndex = maxIndex;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  } else if (event.keyCode === 39) {
    imgIndex++;
    if (imgIndex > maxIndex) imgIndex = 0;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  }
});

lightboxOverlay.addEventListener("click", close);