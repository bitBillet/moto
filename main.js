// Events

window.addEventListener('load', function () {
    document.body.classList.remove('hide');
    document.body.classList.add('after-load');
    document.body.querySelector('.preloader').remove();
});



let bikeImage = document.body.querySelector('.main'),
    points = bikeImage.querySelectorAll('.main__slider p');

setInterval(() => {
    for (let point of points) {
        point.classList.toggle('active');
    }
    bikeImage.classList.toggle('main-reshow');
}, 5000);

let nav = bikeImage.querySelector('.main__nav');
document.addEventListener('click', (event) => event.preventDefault());

nav.addEventListener('click', transport);

function transport(event) {
    if (event.target.tagName !== 'A') return;
    let elem = event.target.textContent;
    switch (elem) {
        case 'ABOUT US':
            elem = document.body.querySelector('.footer-bikes');
            elem.scrollIntoView();
            break;
        case 'SHOP':
            elem = document.body.querySelector('.product');
            elem.scrollIntoView();
            break;
        case 'BLOG':
            elem = document.body.querySelector('.bikes');
            elem.scrollIntoView();
            break;
        case 'CONTACT':
            elem = document.body.querySelector('footer');
            elem.scrollIntoView();
            break;
        default:
            break;
    }
}

let textArea = document.body.querySelector('form .input-text');
textArea.addEventListener('focus', onFocus);
textArea.addEventListener('blur', onBlur);

function onFocus() {
    textArea.value = '';
}

function onBlur() {
    textArea.value = 'Your email address';
}