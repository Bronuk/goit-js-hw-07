import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery');
galleryCard.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(element) {
    return element.map(({ preview, original, description }) => {
        return `<li>
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"
    </a ></li>
        `;
    }).join("");
} 

// const galleryItemsContainer = document.querySelector(".gallery");

    new SimpleLightbox('.gallery a', {captionDelay:250, captionsData: 'alt'});

    console.log(galleryCard);