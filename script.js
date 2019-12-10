let bikeImage = document.body.querySelector('.main'),
points = bikeImage.querySelectorAll('.main__slider p');

setInterval (() => {
    for (let point of points) {
        point.classList.toggle('active');
    }
    bikeImage.classList.toggle('main-reshow');
}, 5000);

let nav = bikeImage.querySelector('.main__nav');

nav.addEventListener('click', transport);

function transport (event) {
    event.preventDefault();
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