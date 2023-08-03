// JavaScript
// Toggle Mobile Version
const mobileBtn = document.querySelector('.mobile-btn');
const mobileVersion = document.querySelector('.mobile-version');
mobileBtn.addEventListener('click', () => {
    mobileVersion.classList.toggle('show');
});