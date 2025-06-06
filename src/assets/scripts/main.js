/**
 * Import dependencies from node_modules
 * see commented examples below
 */


// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".c-carousel__item img");
  const person_images = document.querySelectorAll(".c-speaker img");

  images.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(img.src));
  });

  person_images.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(img.src));
  });

  function openLightbox(src) {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");

    const container = document.createElement("div");
    container.classList.add("lightbox-container");

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagen ampliada";

    container.appendChild(img);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  }
});
