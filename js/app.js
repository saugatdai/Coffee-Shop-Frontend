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
    // submit the form
    document.querySelector('.drink-form').addEventListener('submit', event => {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastname = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastname, email);

        if (value) {
            let customer = new Customer(name, lastname, email);
            ui.addCustomer(customer);
            ui.showFeedback('Customer added to the list', 'success');
            ui.clearFields();
        } else {
            ui.showFeedback('some form values are empty', 'error');
        }

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

// check for empty values
UI.prototype.checkEmpty = function(firstname, lastname, email) {

    return firstname !== '' && lastname !== '' && email !== '';
}

UI.prototype.showFeedback = function(text, type) {
    const feedback = document.querySelector('.drink-form__feedback');
    if (type === 'success') {
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    } else if (type === 'error') {
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

// remove alert
UI.prototype.removeAlert = function(type) {
    setTimeout(function() {
        document.querySelector('.drink-form__feedback').classList.remove(type);
    }, 3000);
}

// add Customer
UI.prototype.addCustomer = function(customer) {
    console.log(customer);
    const images = [1, 2, 3, 4, 5];
    let random = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<img src='img/person-${random}.jpeg' class='person__thumbnail'>
                    <h4 class="person__name">${customer.name}</h4>
                    <h4 class="person__last-name">${customer.lastname}</h4>`;
    document.querySelector('.drink-card__list').appendChild(div);
}

// clear fields
UI.prototype.clearFields = function() {
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
}

function Customer(name, lastname, email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
}