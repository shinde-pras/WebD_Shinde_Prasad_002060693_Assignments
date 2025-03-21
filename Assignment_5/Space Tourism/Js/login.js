document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    // Create background elements (stars, planets, etc.)
    createSpaceObjects();
    createStars();
    createSpaceships();
    // createRockets();

    loginButton.disabled = true;

    // Login form validation
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailFeedback = createFeedbackElement(loginEmail);
    const loginPasswordFeedback = createFeedbackElement(loginPassword);

    [loginEmail, loginPassword].forEach(input => {
        input.addEventListener('input', validateLoginForm);
    });

    function validateLoginForm() {
        const isEmailValid = validateEmail(loginEmail.value);
        const isPasswordValid = validatePassword(loginPassword.value);

        updateFeedback(loginEmail, isEmailValid, "Please enter a valid email address.");
        updateFeedback(loginPassword, isPasswordValid, "Password must be at least 8 characters long.");

        loginButton.disabled = !(isEmailValid && isPasswordValid);
        return isEmailValid && isPasswordValid;
    }

    document.getElementById('login').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateLoginForm()) {
            console.log('Login successful');
            playRocketAnimation();
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 3000);
        }
    });

    // Helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
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

    // function createRockets() {
    //     console.log('Creating rockets');
    //     const spaceObjectsContainer = document.querySelector('.space-objects');
    //     for (let i = 0; i < 2; i++) {
    //         const rocket = document.createElement('div');
    //         rocket.innerHTML = '🚀';
    //         rocket.classList.add('rocket');
    //         rocket.style.position = 'absolute';
    //         rocket.style.fontSize = '40px';
    //         rocket.style.bottom = `0`;
    //         rocket.style.left = `${Math.random() * 80}%`;
    //         rocket.style.animationDelay = `${Math.random() * 5}s`;
    //         spaceObjectsContainer.appendChild(rocket);
    //     }
    //     document.body.appendChild(spaceObjectsContainer);
    // }

    function playRocketAnimation() {
        console.log('Starting rocket animation');
        
        const rocket = document.createElement('div');
        rocket.innerHTML = '🚀';
        rocket.id = 'launch-rocket';
        document.body.appendChild(rocket);
        
        console.log('Rocket element created and appended');
    
        // Force a reflow
        rocket.offsetHeight;
    
        rocket.style.bottom = '100%';
        
        console.log('Rocket animation triggered');
    
        // Delay the redirect
        setTimeout(() => {
            console.log('Animation complete, redirecting...');
            window.location.href = 'home.html';
        }, 2500);
    }
    
    // In your form submit event listener
    document.getElementById('login').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateLoginForm()) {
            console.log('Login successful, playing animation');
            playRocketAnimation();
        }
    });
    
    

    // Add rocket launch effect to login button
    loginButton.addEventListener('click', function () {
        if (!this.disabled) {
            this.classList.add('launch');
            setTimeout(() => this.classList.remove('launch'), 1000);
        }
    });
});
