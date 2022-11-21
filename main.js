// Main Javascript

//Functions

function logValue (event) {
    console.clear();
    console.log('%c' + event.target.getAttribute('id'), 'font-size: 1rem; font-weight: bolder;');
    console.log('%cvalue: ' + '%c' + event.target.value, 'color: blue;', 'color: purple;');
}

function validateEmail (event) {
    logValue(event);

    const errorSpan = event.target.nextElementSibling;
    const validFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    if (validFormat.test(event.target.value)) {
        console.log("%cMatches Regex", "color: green; font-weight: bold;");
        errorSpan.classList.remove('visible');
    } else {
        errorSpan.innerText = "Please provide email in format: email@provider.com, with no spaces";
        errorSpan.classList.add('visible');
    }
    if (event.target.value == "") {
        errorSpan.classList.remove('visible');
    }
}

function validateCountry (event) {
    logValue(event);
    const validFormat = /^[a-zA-Z\-]*$/i
    if (validFormat.test(event.target.value)) {
        console.log("%cMatches Regex", "color: green; font-weight: bold;");
    }
}

function validateZipCode (event) {
    if (event.target.value.length > 5) {
        event.target.value = event.target.value.slice(0,5);
    }

    logValue(event);

}

function validatePassword (event) {
    logValue(event);

    const validFormat = /^[^ ]*$/;

    if (validFormat.test(event.target.value) && event.target.value.length >= 8 && event.target.value.length <= 20) {
        console.log("%cMatches Regex and is Correct Length", "color: green; font-weight: bold;");
    }
}

function validatePasswordConfirm (event) {
    logValue(event);

    const passwordInput = document.querySelector('#password');

    if (event.target.value === passwordInput.value) {
        console.log("passwords match");
    } else {
        console.log("password mismatch");
    }
    
}

function submitForm (event) {
    event.preventDefault();
}

// Event Listeners

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

const email = document.querySelector('#email');
email.addEventListener('input', validateEmail);

const country = document.querySelector('#country');
country.addEventListener('input', validateCountry);

const zipCode = document.querySelector('#zipCode');
zipCode.addEventListener('input', validateZipCode);


const password = document.querySelector('#password');
password.addEventListener('input', validatePassword);


const passwordConfirm = document.querySelector('#passwordConfirm');
passwordConfirm.addEventListener('input', validatePasswordConfirm);

