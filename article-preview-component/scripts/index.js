const shareBtn = document.querySelector('.share-btn');
const shareMenu = document.querySelector('.share-menu');

shareBtn.addEventListener('click', () => {
    if (shareMenu.style.display === 'none') {
        shareMenu.style.display = 'flex';
    } else {
        shareMenu.style.display = 'none';
    }
})