const cardContainer = document.getElementById("cardContainer");
const uploadCardForm = document.getElementById("uploadCardForm");
const uploadBtn = document.getElementById("submit");
const fileInput = document.getElementById("imgUpload");
let uploadedImage = "";

let posts = JSON.parse(localStorage.getItem("posts")) || [];
updateCardContainer();

function updateCardContainer() {
  localStorage.setItem("posts", JSON.stringify(posts));
  cardContainer.innerHTML = "";

  for (let post of posts) {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
      <div class="card">
          <img src="${post.img}" class = "card-img">
          <h3 class = "card-name">${post.name}</h3>
           <h3 class = "card-input">${post.location}</h3>
      </div>
     `;
    cardContainer.append(newCard);
  }
}

fileInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});

uploadCardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = uploadCardForm.elements.name;
  const inputLocation = uploadCardForm.elements.location;
  if (inputName.value && inputLocation.value && fileInput.value !== "") {
    posts.push({
      img: uploadedImage,
      name: inputName.value,
      location: inputLocation.value,
    });
    updateCardContainer();
    inputName.value = "";
    inputLocation.value = "";
    fileInput.value = "";
  }
});

let number = 30;
for (let i = 1; i < number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
