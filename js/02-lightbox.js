import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery');
galleryCard.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(element) {
    return element.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"
    </a >
        `;
    }).join("");
} 

const galleryItemsContainer = document.querySelector(".gallery");
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick);

function onGalleryItemsContainerClick(event) { 
    event.preventDefault();

    if (event.target.getAttribute("class") !== "gallery__image") {
        return;
    }

    new SimpleLightbox('.gallery a', {captionDelay:250, captionsData: 'alt'});
};