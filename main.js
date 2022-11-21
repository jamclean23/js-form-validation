// Main Javascript

//Functions

function validateEmail (event) {

}

function validateCountry (event) {

}

function validateZipCode (event) {
    
}

function validatePassword (event) {

}

function validatePasswordConfirm (event) {
    
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


const passwordConfirm = document.querySelector('passwordConfirm');
passwordConfirm.addEventListener('input', validatePasswordConfirm);

