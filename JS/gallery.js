const images = [
    {
        preview: 'images/img1_preview.png',
        original: 'images/img1.png',
        description: 'Cats'
    },
    {
        preview: 'images/img2_preview.png',
        original: 'images/img2.png',
        description: 'Lying cat'
    },
    {
        preview: 'images/img3_preview.png',
        original: 'images/img3.png',
        description: 'Just cat'
    },
    {
        preview: 'images/img4_preview.png',
        original: 'images/img4.png',
        description: 'Scared cat'
    },
    {
        preview: 'images/img5_preview.png',
        original: 'images/img5.png',
        description: 'Just 2nd cat'
    },
    {
        preview: 'images/img6_preview.png',
        original: 'images/img6.png',
        description: 'Lying cat 2nd'
    }
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
    return `
        <li class="gallery-item">
            <a href="${original}" class="gallery-link">
                <img src="${preview}" alt="${description}" class="gallery-image">
            </a>
        </li>
    `;
}).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalImageSrc = event.target.closest('a').href;

    const instance = basicLightbox.create(`
        <img src="${originalImageSrc}" alt="${event.target.alt}">
    `);

    instance.show();
});
