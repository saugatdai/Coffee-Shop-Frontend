// hide preloader
// all the images scripts links have finished loading

eventListeners();

function eventListeners() {
    const ui = new UI();

    // preloader
    window.addEventListener('load', () => {
        ui.hidePreloader();
    });
    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function() {
        ui.showNav();
    });

    // control video
    document.querySelector('.video__switch').addEventListener('click', () => {
        ui.videoControls();
    });
}

function UI() {}

//  hide preloader
UI.prototype.hidePreloader = () => {
    document.querySelector('.preloader').style.display = 'none';
}

// show-hide nav
UI.prototype.showNav = () => {
    document.querySelector('.nav').classList.toggle('nav--show');
};

// play/pause video
UI.prototype.videoControls = () => {
    let btn = document.querySelector('.video__switch-btn');
    if (btn.classList.contains('btnSlide')) {
        btn.classList.remove('btnSlide');
        document.querySelector('.video__item').play();
    } else {
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause();
    }
}