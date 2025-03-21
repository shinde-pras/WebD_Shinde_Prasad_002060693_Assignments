document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signupButton = document.getElementById('signupButton');

    // Create background elements (stars, planets, etc.)
    createSpaceObjects();
    createStars();
    createSpaceships();
    createRockets();

    // Disable button initially
    signupButton.disabled = true;

    // Signup form validation
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');

    const firstNameFeedback = createFeedbackElement(firstName);
    const lastNameFeedback = createFeedbackElement(lastName);
    const signupEmailFeedback = createFeedbackElement(signupEmail);
    const signupPasswordFeedback = createFeedbackElement(signupPassword);

    [firstName, lastName, signupEmail, signupPassword].forEach(input => {
        input.addEventListener('input', validateSignupForm);
    });

    function validateSignupForm() {
        const isFirstNameValid = validateFirstName(firstName.value);
        const isLastNameValid = validateLastName(lastName.value);
        const isEmailValid = validateEmail(signupEmail.value);
        const isPasswordValid = validatePassword(signupPassword.value);

        updateFeedback(firstName, isFirstNameValid, "Please enter only alphabetic characters.");
        updateFeedback(lastName, isLastNameValid, "Please enter only alphabetic characters.");
        updateFeedback(signupEmail, isEmailValid, "Please enter a valid email address.");
        updateFeedback(signupPassword, isPasswordValid, "Password must be at least 8 characters long.");

        signupButton.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid);
    }

    // Handle form submission
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        if (!signupButton.disabled) {
            alert("Account Created"); 
            playRocketAnimation(); 
            setTimeout(() => {
                window.location.href = 'login.html'; 
            }, 2000);
        } 
    });

    // Validations
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function validateFirstName(firstName) {
        return /^[a-zA-Z]+$/.test(firstName);
    }
     
    function validateLastName(lastName) {
        return /^[a-zA-Z]+$/.test(lastName);
    }


    function createFeedbackElement(inputField) {
        const feedbackElement = document.createElement("div");
        feedbackElement.style.color = "#99ff99";
        feedbackElement.style.fontSize = "0.7em";
        feedbackElement.style.marginTop = "5px";
        inputField.parentNode.appendChild(feedbackElement);
        return feedbackElement;
    }

    function updateFeedback(inputField, isValid, message) {
        const feedbackElement = inputField.nextElementSibling;
        if (!isValid) {
            feedbackElement.textContent = message;
            inputField.classList.add("is-invalid");
            inputField.classList.remove("is-valid");
        } else {
            feedbackElement.textContent = "";
            inputField.classList.remove("is-invalid");
            inputField.classList.add("is-valid");
        }
    }

    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            starsContainer.appendChild(star);
        }
        document.body.appendChild(starsContainer);
    }

    function createSpaceObjects() {
        const spaceObjectsContainer = document.createElement('div');
        spaceObjectsContainer.classList.add('space-objects');

        const objects = [
            { class: 'planet', count: 3 },
            { class: 'moon', count: 5 },
            { class: 'comet', count: 2 }
        ];

        objects.forEach(obj => {
            for (let i = 0; i < obj.count; i++) {
                const element = document.createElement('div');
                element.classList.add(obj.class);
                element.style.top = `${Math.random() * 100}%`;
                element.style.left = `${Math.random() * 100}%`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                spaceObjectsContainer.appendChild(element);
            }
        });

        document.body.appendChild(spaceObjectsContainer);
    }

    function createSpaceships() {
        console.log('Creating spaceships');
        const spaceObjectsContainer  = document.querySelector('.space-objects');
        //spaceshipsContainer.classList.add('spaceships');
        for (let i = 0; i < 2; i++) {
            const spaceship = document.createElement('div');
            spaceship.innerHTML = '🛸';
            spaceship.classList.add('spaceship');
            spaceship.style.position = 'absolute';
            spaceship.style.fontSize = '40px';
            spaceship.style.top = `${Math.random() * 80}%`;
            spaceship.style.left = `0`;
            spaceship.style.animationDelay = `${Math.random() * 5}s`;
            spaceObjectsContainer.appendChild(spaceship);
        }
        document.body.appendChild(spaceObjectsContainer);
    }

    function createRockets() {
        console.log('Creating rockets');
        const spaceObjectsContainer = document.querySelector('.space-objects');
        for (let i = 0; i < 2; i++) {
            const rocket = document.createElement('div');
            rocket.innerHTML = '🚀';
            rocket.classList.add('rocket');
            rocket.style.position = 'absolute';
            rocket.style.fontSize = '40px';
            rocket.style.bottom = `0`;
            rocket.style.left = `${Math.random() * 80}%`;
            rocket.style.animationDelay = `${Math.random() * 5}s`;
            spaceObjectsContainer.appendChild(rocket);
        }
        document.body.appendChild(spaceObjectsContainer);
    }

    function playRocketAnimation() {
        const rocket = document.createElement('div');
        rocket.innerHTML = '🚀';
        rocket.classList.add('rocket');
        document.body.appendChild(rocket);

        rocket.style.opacity = '1';
        rocket.style.bottom = '0';

        // Blur the content behind the rocket
        const form = document.querySelector('form');
        form.style.transition = 'filter 2s ease';
        form.style.filter = 'blur(5px)';

        setTimeout(() => {
            rocket.style.bottom = '100%';
        }, 50);

        setTimeout(() => {
            rocket.remove();
            form.style.filter = 'none'; // Remove blur
        }, 2100);
    }

});
