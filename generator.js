// Username and Password generator

/*
Username code

create array with the alphabet and numbers from 1 to 9
create eventListener for the generate username button
create function to generate a random name
update the value of the span with the generated value
*/

const usernameButton = document.querySelector('[data-key="username"]');
const userNameValue = document.querySelector('[data-key="username__value"]');
const userName = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  "#",
  "$",
  "/",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

// Function to generate random username
const generateUserName = () => {
  return Math.floor(Math.random() * userName.length);
};

usernameButton.addEventListener("click", () => {
  // loop through userName array
  for (let i = 0; i < userName.length; i++) {
    // update the username textContent and call the generateUsername function on the array
    userNameValue.textContent += userName[generateUserName()] + "\n";
  }
});

/*
Password code

create array with the alphabet and numbers from 1 to 9
create eventListener for the generate password button
create function to generate a random name password
update the value of the span with the generated value
*/

const passwordButton = document.querySelector('[data-key="password"]');
const passwordValue = document.querySelector('[data-key="password__value"]');
const passWord = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  "#",
  "$",
  "/",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

// Function to generate random username
const generatePassword = () => {
  return Math.floor(Math.random() * passWord.length);
};

passwordButton.addEventListener("click", () => {
  for (let i = 0; i < passWord.length; i++) {
    // update the username textContent and call the generateUsername function on the array
    passwordValue.textContent += passWord[generateUserName()] + "\n";
  }
});
