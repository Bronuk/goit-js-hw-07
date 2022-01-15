import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery');
galleryCard.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(element) {
    return element.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
        `;
    }).join("");
} 

console.log(galleryCard);

const galleryItemsContainer = document.querySelector(".gallery");
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick);

function onGalleryItemsContainerClick(event) { 
    event.preventDefault();

    if (event.target.getAttribute("class") !== "gallery__image") {
        return;
    }
    
    const urlImage = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${urlImage}" width="800" height="600">`);
    instance.show();
};





// document.addEventListener('keydown', function(event) {
//     const escKey = event.escKey; // const {key} = event; in ES6+
//     if (escKey === "Escape") {
//         // document.querySelector("gallery__image").style.display = "none";
//         instance.close();
//     }
//     console.log(escKey);
// });