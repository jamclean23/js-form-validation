// Main Javascript

//Modules

const Validate = (function () {

    function logValue (event) {
        console.clear();
        console.log('%c' + event.getAttribute('id'), 'font-size: 1rem; font-weight: bolder;');
        console.log('%cvalue: ' + '%c' + event.value, 'color: blue;', 'color: purple;');
    }

    function validateEmail () {
        const email = document.querySelector('#email');
        logValue(email);
        const errorSpan = email.nextElementSibling;
        const validFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
        if (validFormat.test(email.value)) {
            console.log("%cMatches Regex", "color: green; font-weight: bold;");
            errorSpan.classList.remove('visible');
            email.state = 1;
        } else {
            errorSpan.innerText = "Please provide email in format: email@provider.com, with no spaces";
            errorSpan.classList.add('visible');
            email.state = 0;
        }
        if (email.value == "") {
            errorSpan.classList.remove('visible');
            email.state = 0;
        }
    }

    function validateCountry () {
        const country = document.querySelector('#country');
        logValue(country);

        const validFormat = /^[a-zA-Z\- ]*$/i
        const errorSpan = country.nextElementSibling;

        if (validFormat.test(country.value)) {
            console.log("%cMatches Regex", "color: green; font-weight: bold;");
            errorSpan.classList.remove('visible');
            country.state = 1
        } else {
            errorSpan.innerText = "Please provide the name of your country, with no numbers or special characters";
            errorSpan.classList.add('visible');
            country.state = 0
        }
        if (country.value == "") {
            errorSpan.classList.remove('visible');
            country.state = 0
        }
    }

    function validateZipCode () {

        const zipCode = document.querySelector('#zipCode');
        const errorSpan = zipCode.nextElementSibling;

        if (zipCode.value.length > 5) {
            zipCode.value = zipCode.value.slice(0,5);
        }
        if (zipCode.value.length === 5) {
            zipCode.state = 1;
            errorSpan.classList.remove('visible')
        } else if (zipCode.value.length < 5) {
            errorSpan.innerText = "Please provide a zipcode of 5 characters";
            errorSpan.classList.add('visible');
            zipCode.state = 0; 
        }
        if (zipCode.value == "") {
            errorSpan.classList.remove('visible');
        }

        logValue(zipCode);

    }

    function validatePassword () {
        validatePasswordConfirm();

        const password = document.querySelector('#password');
        logValue(password);
        const validFormat = /^[^ ]*$/;
        const errorSpan = password.nextElementSibling;

        if (validFormat.test(password.value) && password.value.length >= 8 && password.value.length <= 20) {
            console.log("%cMatches Regex and is Correct Length", "color: green; font-weight: bold;");
            errorSpan.classList.remove('visible');
            password.state = 1;
        } else {
            errorSpan.innerText = 'Please provide a password that is between 8 and 20 characters, with no spaces';
            errorSpan.classList.add('visible');
            password.state = 0;
        }
        if (password.value == "") {
            errorSpan.classList.remove('visible');
            password.state = 0;
        }
    }

    function validatePasswordConfirm () {

        const passwordConfirm = document.querySelector('#passwordConfirm');
        logValue(passwordConfirm);

        const passwordInput = document.querySelector('#password');
        const errorSpan = passwordConfirm.nextElementSibling;

        if (passwordConfirm.value === passwordInput.value) {
            console.log("passwords match");
            errorSpan.classList.remove('visible');
            passwordConfirm.state = 1;
        } else {
            errorSpan.innerText = "Passwords do not match";
            errorSpan.classList.add('visible');
            passwordConfirm.state = 0;
        }
        if (passwordConfirm.value == "") {
            errorSpan.classList.remove('visible');
            passwordConfirm.state = 0;
        }
        
    }

    function submitForm (event) {
        const inputs = document.querySelectorAll('input');
        const valueStates = [];
        inputs.forEach((input)=> {
            valueStates.push(input.state);
        });

        valueStates.forEach((value) => {
            const image = document.querySelector('img');
            image.classList.add('visible');
            if (!value) {
                image.classList.remove('visible');
            }
        });

        event.preventDefault();
    }

    return {
        validateEmail,
        validateCountry,
        validateZipCode,
        validatePassword,
        validatePasswordConfirm,
        submitForm
    }
})();

// Event Listeners

const form = document.querySelector('form');
form.addEventListener('submit', Validate.submitForm);

const email = document.querySelector('#email');
email.addEventListener('input', Validate.validateEmail);

const country = document.querySelector('#country');
country.addEventListener('input', Validate.validateCountry);

const zipCode = document.querySelector('#zipCode');
zipCode.addEventListener('input', Validate.validateZipCode);


const password = document.querySelector('#password');
password.addEventListener('input', Validate.validatePassword);


const passwordConfirm = document.querySelector('#passwordConfirm');
passwordConfirm.addEventListener('input', Validate.validatePasswordConfirm);