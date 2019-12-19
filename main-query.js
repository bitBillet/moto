
//Events
$(document).ready(function () {
    $(window).on('load', function () {
        $('body')
            .removeClass('hide')
            .addClass('after-load')
        $('.preloader').remove()
    })

    let $bikeImage = $('.main');
    let $points = $('.main__slider p');
    setInterval(() => {
        $points.toggleClass('active');
        $bikeImage.toggleClass('main-reshow');
    }, 5000);

    let $nav = $('.main__nav')
    $(document).on('click', (event) => event.preventDefault())
    $nav.on('click', transport)

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

    function onFocus() {
        $textArea.val('');
    }

    function onBlur() {
       $textArea.val('Your email address');
    }
    let $textArea = $('form .input-text')
    $textArea.on('focus', onFocus)
    $textArea.on('blur', onBlur)
})