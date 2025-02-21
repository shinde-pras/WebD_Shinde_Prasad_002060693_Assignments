$(document).ready(function() {
    // Login Page Validations
    let emailValid = false;
    let usernameValid = false;
    let passwordValid = false;
    let confirmValid = false;

    function validateEmail() {
        const email = $('#email').val();
        const regex = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
        if (!email) {
            $('#email-error').text('Email is required');
            return false;
        }
        if (!regex.test(email)) {
            $('#email-error').text('Invalid Northeastern email');
            return false;
        }
        $('#email-error').text('');
        return true;
    }

    function validateUsername() {
        const username = $('#username').val();
        const regex = /^[a-zA-Z ]+$/;
        if (!username) {
            $('#username-error').text('Username is required');
            return false;
        }
        if (!regex.test(username)) {
            $('#username-error').text('No numbers or special characters allowed');
            return false;
        }
        if (username.length < 3 || username.length > 20) {
            $('#username-error').text('Username must be 3-20 characters');
            return false;
        }
        $('#username-error').text('');
        return true;
    }

    function validatePassword() {
        const password = $('#password').val();
        if (!password) {
            $('#password-error').text('Password is required');
            return false;
        }
        if (password.length < 8 || password.length > 20) {
            $('#password-error').text('Password must be 8-20 characters');
            return false;
        }
        $('#password-error').text('');
        return true;
    }

    function validateConfirmPassword() {
        const confirm = $('#confirm-password').val();
        const password = $('#password').val();
        if (!confirm) {
            $('#confirm-password-error').text('Please confirm password');
            return false;
        }
        if (confirm !== password) {
            $('#confirm-password-error').text('Passwords do not match');
            return false;
        }
        $('#confirm-password-error').text('');
        return true;
    }

    function updateLoginButton() {
        const allValid = emailValid && usernameValid && passwordValid && confirmValid;
        $('#login-button').prop('disabled', !allValid);
    }

    $('#email').on('input', () => {
        emailValid = validateEmail();
        updateLoginButton();
    });

    $('#username').on('input', () => {
        usernameValid = validateUsername();
        updateLoginButton();
    });

    $('#password').on('input', () => {
        passwordValid = validatePassword();
        confirmValid = validateConfirmPassword();
        updateLoginButton();
    });

    $('#confirm-password').on('input', () => {
        confirmValid = validateConfirmPassword();
        updateLoginButton();
    });

    // Login Button Click Handler
    $('#login-button').click(() => {
        $('#login-page').hide();
        $('#calculator-page').show();
        $('#username-display').text(`Welcome, ${$('#username').val()}!`);
    });

    // Calculator Page Validations
    function validateNumber(inputId) {
        const value = $(`#${inputId}`).val();
        const errorId = `#${inputId}-error`;
        
        if (!value) {
            $(errorId).text('This field is required');
            return false;
        }
        if (isNaN(value) || !isFinite(value)) {
            $(errorId).text('Please enter a valid number');
            return false;
        }
        $(errorId).text('');
        return true;
    }

    const calculate = (a, b, operation) => ({
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: b !== 0 ? a / b : NaN
    })[operation];

    $('.operation-button').click(function() {
        const operation = $(this).data('op');
        const num1Valid = validateNumber('num1');
        const num2Valid = validateNumber('num2');
        
        if (!num1Valid || !num2Valid) return;

        const num1 = parseFloat($('#num1').val());
        const num2 = parseFloat($('#num2').val());

        if (operation === 'divide' && num2 === 0) {
            $('#num2-error').text('Cannot divide by zero');
            return;
        }

        const result = calculate(num1, num2, operation);
        $('#result').val(isNaN(result) ? 'Error' : result);
    });

    $('#num1, #num2').on('input', function() {
        validateNumber(this.id);
    });
});