document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    fetch('artworks.json')
        .then(response => response.json())
        .then(artworks => {
            artworks.forEach(artwork => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');
                galleryItem.innerHTML = `<img src="${artwork.image}" alt="${artwork.title}">`;
                galleryItem.addEventListener('click', () => {
                    modal.style.display = 'block';
                    modalImage.src = artwork.image;
                    caption.innerHTML = `<h3>${artwork.title}</h3><p>${artwork.medium}, ${artwork.year}</p>`;
                });
                galleryGrid.appendChild(galleryItem);
            });
        });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});