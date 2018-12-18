//show project description on hover and focus
const image = document.querySelectorAll(".proj-img");
const imageLink = document.querySelectorAll(".image-link");

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseenter", addDescription);
  image[i].addEventListener("mouseleave", removeDescription);
}

for (let i = 0; i < imageLink.length; i++) {
  imageLink[i].addEventListener("focusin", focusAddRemoveDescription);
  imageLink[i].addEventListener("focusout", focusAddRemoveDescription);
}

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
