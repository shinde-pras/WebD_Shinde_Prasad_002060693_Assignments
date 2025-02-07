// Variable declarations
const form = document.querySelector("form");
const titles = document.querySelectorAll('input[name="title"]');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
const streetAddress1 = document.getElementById("streetAddress1");
const streetAddress2 = document.getElementById("streetAddress2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const source = document.querySelectorAll("#source");
const comments = document.getElementById("comments");
const ratingSelect = document.getElementById("rating");
const dynamicCheckbox = document.getElementById("dynamicCheckbox");
const textReason = document.getElementById("textReason");
const ratingComment = document.getElementById("ratingComment");
const submitBtn = document.getElementById("submitBtn");

let table = document.getElementById("tableData");
let validatationBool = false;
let validationErrors = {};

// Function to check form validity
function checkFormValidity() {
  const isTitleSelected = Array.from(titles).some(radio => radio.checked);
  const isFirstNameValid = firstName.value.length >= 3 && firstName.value.length <= 50;
  const isLastNameValid = lastName.value.length >= 3 && lastName.value.length <= 50;
  const isEmailValid = validateEmail(emailId.value);
  const isPhoneValid = validatePhoneNo(phoneNumber.value);
  const isStreetAddress1Valid = streetAddress1.value !== "";
  const isCityValid = city.value !== "";
  const isStateValid = state.value !== "";
  const isZipcodeValid = validateZipCode(zipcode.value);
  const isRatingSelected = ratingSelect.value !== "select";
  const isRatingCommentValid = ratingComment.value !== "";

  if (
    isTitleSelected &&
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isStreetAddress1Valid &&
    isCityValid &&
    isStateValid &&
    isZipcodeValid &&
    isRatingSelected &&
    isRatingCommentValid
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Attach event listeners to form fields
titles.forEach(title => title.addEventListener("change", checkFormValidity));
firstName.addEventListener("input", checkFormValidity);
lastName.addEventListener("input", checkFormValidity);
emailId.addEventListener("input", checkFormValidity);
phoneNumber.addEventListener("input", checkFormValidity);
streetAddress1.addEventListener("input", checkFormValidity);
city.addEventListener("input", checkFormValidity);
state.addEventListener("input", checkFormValidity);
zipcode.addEventListener("input", checkFormValidity);
ratingSelect.addEventListener("change", checkFormValidity);
ratingComment.addEventListener("input", checkFormValidity);

// Form Submission Block
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title;

  for (let i = 0; i < titles.length; i++) {
    if (titles[i].checked) {
      validatationBool = true;
      title = titles[i].value;
    }
  }

  if (
    validatationBool &&
    firstName.value != "" &&
    lastName.value != "" &&
    emailId.value != "" &&
    validateEmail(emailId.value) &&
    phoneNumber.value != "" &&
    validatePhoneNo(phoneNumber.value) &&
    streetAddress1.value != "" &&
    city.value != "" &&
    state.value != "" &&
    zipcode.value != "" &&
    validateZipCode(zipcode.value) &&
    ratingSelect.value != "select" &&
    ratingComment.value != ""
  ) {
    let myString = "";

    source.forEach((item) => {
      if (item.checked) {
        myString += item.value + ", ";
      }
    });

    tableData.innerHTML += `
      <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
      firstName.value
    } ${lastName.value}</td>
        <td>${emailId.value}</td>
        <td>${phoneNumber.value}</td>
        <td>${streetAddress1.value}</td>
        <td>${streetAddress2.value}</td>
        <td>${city.value}</td>
        <td>${state.value}</td>
        <td>${zipcode.value}</td>
        <td>${myString}</td>
        <td>${comments.value}</td>
        <td>${ratingSelect.value}</td>
        <td>${ratingComment.value}</td>
      </tr>
    `;

    alert("Details have been uploaded to the table!");
    form.reset();
    validatationBool = false;
    submitBtn.disabled = true; // Disable the submit button after form reset
  } else {
    alert("Please enter details correctly!");
  }
});

// Validation block
firstName.addEventListener("keyup", () => {
  if (validateAlphanumeric(firstName.value)) {
    firstName.style.color = "green";
  } else {
    firstName.style.color = "red";
  }
  checkFormValidity();
});

lastName.addEventListener("keyup", () => {
  if (validateAlphanumeric(lastName.value)) {
    lastName.style.color = "green";
  } else {
    lastName.style.color = "red";
  }
  checkFormValidity();
});

const validateAlphanumeric = (input) => {
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  return alphanumericRegex.test(input);
};

phoneNumber.addEventListener("keyup", () => {
  if (validatePhoneNo(phoneNumber.value)) {
    phoneNumber.style.color = "green";
  } else {
    phoneNumber.style.color = "red";
  }
  checkFormValidity();
});

zipcode.addEventListener("keyup", () => {
  if (validateZipCode(zipcode.value)) {
    zipcode.style.color = "green";
  } else {
    zipcode.style.color = "red";
  }
  checkFormValidity();
});

emailId.addEventListener("keyup", () => {
  const domain = "northeastern.edu";

  if (validateEmail(emailId.value) && emailId.value.indexOf(domain) != -1) {
    emailId.style.color = "green";
  } else if (emailId.value.indexOf(domain) === -1) {
    emailId.style.color = "red";
  }
  checkFormValidity();
});

const validatePhoneNo = (no) => {
  const validateMobileRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return no.match(validateMobileRegex);
};

const validateZipCode = (zipcode) => {
  const validateZip = /^\d{5}(-\d{4})?$/;
  return zipcode.match(validateZip);
};

const validateEmail = (email) => {
  const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(validateEmailId);
};

// Dynamic Select Block Selection
ratingSelect.onchange = (e) => {
  if (e.target.value == "5") {
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 5 rating, what did you like the most?</p>
      <input id="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");

    messageCheckbox1.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox2.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox3.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });
  } else if (e.target.value == "4") {
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 4 rating, please share more details to make the product more viable!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");

    messageCheckbox1.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox2.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox3.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });
  } else if (e.target.value == "3") {
    dynamicCheckbox.style.display = "block";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 3 rating, what did you like or dislike the most?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");

    messageCheckbox1.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox2.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox3.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });
  } else if (e.target.value == "2") {
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Please provide us more feedback to serve you better!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");

    messageCheckbox1.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox2.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox3.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });
  } else if (e.target.value == "1") {
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>We're sorry about it, what went wrong?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");

    messageCheckbox1.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox2.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });

    messageCheckbox3.addEventListener("click", () => {
      if (
        messageCheckbox1.checked ||
        messageCheckbox2.checked ||
        messageCheckbox3.checked
      ) {
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
      checkFormValidity();
    });
  } else {
    dynamicCheckbox.style.display = "none";
    textReason.style.display = "none";
    dynamicCheckbox.innerHTML = "";
  }
}