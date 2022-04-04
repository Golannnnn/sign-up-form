const myForm = document.getElementById('myForm');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const input = document.querySelectorAll("input");

const errorMsg = (element, message) => {
    inputWrapper = element.parentElement;
    errorText = inputWrapper.querySelector('.error');

    errorText.innerText = message;
    inputWrapper.classList.add('error');
    inputWrapper.classList.remove('success');
};

const succesMsg = element => {
    inputWrapper = element.parentElement;
    errorText = inputWrapper.querySelector('.error');

    errorText.innerText = '';
    inputWrapper.classList.add('success');
    inputWrapper.classList.remove('error');
};

function checkEmail (email) {
    reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function validateForm() {
    
    if (firstName.value == '') {
        errorMsg(firstName, 'First name is required.');
        return false;
    } else {
        succesMsg(firstName);
    }

    if (lastName.value == '') {
        errorMsg(lastName, 'Last name is required.');
        return false;
    } else {
        succesMsg(lastName);
    }

    if (email.value == '') {
        errorMsg(email, 'Email is required.');
        return false;
    } else if (!checkEmail(email.value)) {
        errorMsg(email, 'Enter a valid email.');
        return false;
    } else {
        succesMsg(email);
    }

    if (password.value == '') {
        errorMsg(password, 'Password is required.');
        return false;
    } else {
        succesMsg(password);
    }

    if (password2.value == '') {
        errorMsg(password2, 'Confirm your password.');
        
    } else if (password.value != password2.value) {
        errorMsg(password2, "Passwords don't match.");
        return false;
    } else {
        succesMsg(password2);
    }

    return true;
}

for (let i = 0; i < input.length; i++) {
	input[i].onkeyup = validateForm;
    input[i].onchange = validateForm;
}
