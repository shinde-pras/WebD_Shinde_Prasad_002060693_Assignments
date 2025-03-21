const moon = document.getElementById("moon");
const astronaut = document.getElementById("astronaut");
const welcomeText = document.getElementById("welcomeText");
const hero = document.getElementById("hero");

function updateLanding() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const heroHeight = hero.offsetHeight;
  let progress = scrollTop / heroHeight;
  if (progress > 1) progress = 1;

  const viewportWidth = window.innerWidth;
  let moonStart = 200;    // Default for large screens
  let astroStart = -70;
  let astroEnd = 100;
  astronaut.style.width = "300px";
  welcomeText.style.fontSize = "3.2rem";
  
  // Adjust for medium screens (width between 768px and 1200px)
  if (viewportWidth < 1200 && viewportWidth >= 768) {
    moonStart = 150;
    astroStart = 200;
    astroEnd = 400;
    astronaut.style.width = "200px";
    welcomeText.style.fontSize = "3.2rem";
    // Ensure hero's margin is reset
    hero.style.marginTop = "0px";
  }
  
  // Adjust for small screens (width less than 768px)
  if (viewportWidth < 768) {
    moonStart = 100;
    // Check the hero's height for cropping:
    if (heroHeight > 800) {  
      // For taller hero sections (modern devices), adjust astronaut offsets
      astroStart = 250;
      astroEnd = 350;
      // Shift the hero section upward so that the top 100px is not visible at all
      hero.style.marginTop = "-250px";
    } else {
      hero.style.marginTop = "0px";
      astroStart = 100;
      astroEnd = 200;
    }
    astronaut.style.width = "150px";
    welcomeText.style.fontSize = "1.5rem";
  } else {
    // For non-small screens, reset hero margin
    hero.style.marginTop = "0px";
  }
  
  const moonEnd = 0; // Moon always ends at 0 offset
  const currentMoonY = moonStart + (moonEnd - moonStart) * progress;
  const currentAstroY = astroStart + (astroEnd - astroStart) * progress;

  moon.style.transform = `translate( -50%, ${currentMoonY}px)`;
  astronaut.style.transform = `translate(-50%, ${currentAstroY}px)`;

  // Animate welcome text: fade in as scroll progress increases
  const textThreshold = 0; // Start fading in after 20% scroll
let textOpacity = (progress - textThreshold) / (1 - textThreshold);
if (textOpacity > 1) textOpacity = 1;
if (textOpacity < 0) textOpacity = 0;
let textTranslateY = 20 * (1 - textOpacity);
welcomeText.style.opacity = textOpacity;
welcomeText.style.transform = `translate(-50%, ${textTranslateY}px)`;
}

document.addEventListener("scroll", updateLanding);
window.addEventListener("resize", updateLanding);
document.addEventListener("DOMContentLoaded", updateLanding);

// Simulate Login State
let loginState = {
  isLoggedIn: false,
  currentUser: null,
};

// Function to Handle Login
function login(email, password) {
  // Simulate user authentication
  const usersDB = {
    "user1@example.com": "password123",
    "user2@example.com": "mypassword",
  };

  if (usersDB[email] && usersDB[email] === password) {
    loginState.isLoggedIn = true;
    loginState.currentUser = email;

    // Save login state to session storage
    sessionStorage.setItem("loginState", JSON.stringify(loginState));
    return "Login successful";
  } else {
    return "Invalid email or password";
  }
}

// Function to Handle Logout
function logout() {
  loginState.isLoggedIn = false;
  loginState.currentUser = null;

  // Clear session storage
  sessionStorage.removeItem("loginState");
  
  return "Logged out successfully";
}

// Function to Render the Login/Logout Button Dynamically
function renderAuthButton() {
  const authButtonContainer = document.getElementById("authButtonContainer");

  if (loginState.isLoggedIn) {
    authButtonContainer.innerHTML = `
      <button id="logoutButton" class="btn btn-danger">Logout</button>
    `;
    
    // Add event listener for logout functionality
    document.getElementById("logoutButton").addEventListener("click", () => {
      logout();
      renderAuthButton(); // Re-render after logout
      alert("You have been logged out!");
      window.location.href = "login.html"; // Redirect to login page
    });
    
  } else {
    authButtonContainer.innerHTML = `
      <a href="login.html" id="loginButton" class="btn btn-primary">Login</a>
    `;
  }
}

// Restore Login State from Session Storage on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const savedLoginState = JSON.parse(sessionStorage.getItem("loginState"));
  
  if (savedLoginState && savedLoginState.isLoggedIn) {
    loginState.isLoggedIn = savedLoginState.isLoggedIn;
    loginState.currentUser = savedLoginState.currentUser;
  }

  renderAuthButton(); // Render the appropriate button based on login state
});

// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block"; // Show button
    } else {
      backToTopButton.style.display = "none"; // Hide button
    }
  });

  // Scroll smoothly to top when button is clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initially hide the button
  backToTopButton.style.display = "none";
});

// Toast Notification Example (Optional)
document.addEventListener("DOMContentLoaded", function () {
  const toastElement = new bootstrap.Toast(document.getElementById("liveToast"));
  
  document.querySelectorAll(".show-toast").forEach(button => {
    button.addEventListener("click", function () {
      toastElement.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("Mission section with video background loaded.");
});

document.addEventListener("DOMContentLoaded", function () {
  const toastElement = new bootstrap.Toast(document.getElementById("liveToast"));
  
  document.querySelectorAll(".show-toast").forEach(button => {
    button.addEventListener("click", function () {
      toastElement.show();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("signup-progress");
  const enrollButton = document.getElementById("enroll-btn");

  enrollButton.addEventListener("click", function () {
    let currentProgress = parseInt(progressBar.style.width); // Get current width as a number
    if (currentProgress < 100) {
      let newProgress = currentProgress + Math.floor(Math.random() * 5 + 3); // Increase by 3-7%
      if (newProgress > 100) newProgress = 100; // Cap at 100%

      progressBar.style.width = newProgress + "%";
      progressBar.setAttribute("aria-valuenow", newProgress);
      progressBar.textContent = newProgress + "%"; // Update displayed percentage
    }
  });
});