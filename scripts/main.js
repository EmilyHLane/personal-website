//show project description on hover and focus
const image = document.querySelectorAll(".proj-img");
const imageLink = document.querySelectorAll(".image-link");

function addDescription() {
  const description = this.children[0];
  description.classList.toggle("project-description");
  description.classList.toggle("project-remove-desc");
}

function removeDescription() {
  const description = this.children[0];
  description.classList.toggle("project-description");
  description.classList.toggle("project-remove-desc");
}

function focusAddRemoveDescription() {
  const focusDescription = this.children[0].children[0];
  focusDescription.classList.toggle("project-description");
  focusDescription.classList.toggle("project-remove-desc");
}

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseenter", addDescription);
  image[i].addEventListener("mouseleave", removeDescription);
}

for (let i = 0; i < imageLink.length; i++) {
  imageLink[i].addEventListener("focusin", focusAddRemoveDescription);
  imageLink[i].addEventListener("focusout", focusAddRemoveDescription);
}

// About page image swap
const aboutImage = document.querySelector(".about-image");
const aboutImageBack = document.querySelector(".about-image-back");

function swapPhoto() {
  setTimeout(function swap() {
    aboutImage.classList.toggle("hide-image");
    aboutImageBack.classList.toggle("hide-image");
  }, 250);
}

if (aboutImage) {
  aboutImage.addEventListener("mouseenter", swapPhoto);
}

if (aboutImageBack) {
  aboutImageBack.addEventListener("mouseleave", swapPhoto);
}

// contact form

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsp08O8qjijHX-rcjI34db49qBGqQRtsU",
  authDomain: "contact-eb60c.firebaseapp.com",
  databaseURL: "https://contact-eb60c.firebaseio.com",
  projectId: "contact-eb60c",
  storageBucket: "contact-eb60c.appspot.com",
  messagingSenderId: "479107162103"
};
firebase.initializeApp(config);

// reference messages collection
const messagesRef = firebase.database().ref("messages");

//contact form values
document.getElementById("form").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();
  // get values
  const name = getFormValues("name");
  const email = getFormValues("email");
  const message = getFormValues("message");

  // save message
  saveMessage(name, email, message);
}

// get form values
function getFormValues(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
