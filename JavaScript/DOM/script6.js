const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const newSrc = this.src; 
        mainImage.src = newSrc;
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});