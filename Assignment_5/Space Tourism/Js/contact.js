document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }
  
      formMessage.innerHTML = "Message sent successfully!";
      formMessage.style.color = "green";
  
      contactForm.reset();
  
      setTimeout(() => {
        formMessage.innerHTML = "";
      }, 3000);
    });
  });
  