
function enterFictionFeed() {
  const enteredUsername = document.getElementById("usernameInput").value.trim();

  const username = enteredUsername !== "" ? enteredUsername : "guest";

  sessionStorage.setItem("username", username);

  window.location.href = `home.html`;
}


function getUsername() {
  return sessionStorage.getItem("username");
}

function updateUsernameDisplay() {
  const usernameDisplayElement = document.getElementById("usernameDisplay");

  if (usernameDisplayElement) {
    const username = getUsername();
    usernameDisplayElement.innerText = username;
  }
}

window.onload = updateUsernameDisplay;




const suggestedImagesArray = [
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-1.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-2.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-3.jpg",  
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-4.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-5.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-6.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-7.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-8.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-9.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-10.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-11.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-12.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-13.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-14.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-15.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-16.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-17.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-18.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-19.jpg",
  "https://static.demilked.com/wp-content/uploads/2022/12/pranko-funny-ads-20.jpg",
  ];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displaySuggestedImages() {
  const suggestedImagesContainer = document.getElementById('suggestedImagesContainer');

  shuffleArray(suggestedImagesArray);

  suggestedImagesContainer.innerHTML = '';

  for (let i = 0; i < Math.min(suggestedImagesArray.length, 5); i++) {
    const image = document.createElement('img');
    image.classList.add('suggested-image');
    image.src = suggestedImagesArray[i];
    suggestedImagesContainer.appendChild(image);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  displaySuggestedImages();
});

