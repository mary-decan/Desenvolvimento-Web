const mainImage = document.getElementById('mainImage');
const thumbnailsContainer = document.getElementById('thumbnails');
const toggleAutoBtn = document.getElementById('toggleAutoBtn');
const thumbnails = document.querySelectorAll('.thumbnail');

const intervalTime = 3000;
let currentIndex = 0;
let autoInterval = null;
let isAutoPlaying = true;

function setActiveThumbnail(index) {
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnails[index].classList.add('active');
}

function updateMainImage(index) {
    currentIndex = index;
    const newSrc = thumbnails[index].getAttribute('src');
    mainImage.setAttribute('src', newSrc);
    mainImage.setAttribute('alt', `Imagem ${index + 1}`);
    setActiveThumbnail(index);
}

function nextImage() {
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(nextIndex);
}

function startAutoChange() {
    if (autoInterval === null) {
        autoInterval = setInterval(nextImage, intervalTime);
        isAutoPlaying = true;
        toggleAutoBtn.textContent = 'Pause Auto-Troca';
    }
}

function stopAutoChange() {
    if (autoInterval !== null) {
        clearInterval(autoInterval);
        autoInterval = null;
        isAutoPlaying = false;
        toggleAutoBtn.textContent = 'Play Auto-Troca';
    }
}

function handleThumbnailClick(event) {
    const clickedThumb = event.target;
    if (!clickedThumb.classList.contains('thumbnail')) return;

    const index = parseInt(clickedThumb.getAttribute('data-index'));

    updateMainImage(index);

    if (isAutoPlaying) {
        stopAutoChange();
        startAutoChange();
    }
}

function handleToggleAuto() {
    if (isAutoPlaying) {
        stopAutoChange();
    } else {
        startAutoChange();
    }
}

thumbnailsContainer.addEventListener('click', handleThumbnailClick);
toggleAutoBtn.addEventListener('click', handleToggleAuto);

startAutoChange();
setActiveThumbnail(currentIndex);