function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark-theme");
}
let button = document.querySelector("button");
button.addEventListener("click", changeTheme);

function learnCrochet() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  if (name != "" && email != "") {
    alert(`Thank you ${name}! 🥰 We'll mail you the class schedule.`);
  } else {
    alert(`Please fill in all details, to learn crochet🧶. Thank you!`);
  }
}

let learnButton = document.querySelector(".learn-crochet");
learnButton.addEventListener("click", learnCrochet);
