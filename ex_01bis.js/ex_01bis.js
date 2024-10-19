document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let errorMessage = '';

    if (firstname.trim() === '') {
        errorMessage += 'First name must not be empty.\n';
    }

    if (lastname.trim() === '') {
        errorMessage += 'Last name must not be empty.\n';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Email is badly formatted.\n';
    }

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordPattern.test(password)) {
        errorMessage += 'Password must be at least 8 characters long and contain at least a letter and a number.\n';
    }

    const errorMessageElement = document.getElementById('error-message');
    if (errorMessage !== '') {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = 'Form submitted successfully!';
    }
});
