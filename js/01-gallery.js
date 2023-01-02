import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = document.querySelector(".gallery");

const handleClick = (e) => {

const image = e.target.dataset.source;

    if (e.target.dataset.source !== undefined ) {
        const instance = basicLightbox.create(
            ` <img src="${image}"> `
        )
        instance.show()

        document.addEventListener("keydown", function escapeKey(event) {
        if (event.key === "Escape") {
        instance.close();
        }
        });
    }
    e.preventDefault();
};

galleryItem.addEventListener("click", handleClick, false);
