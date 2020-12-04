
const myButton = document.getElementById("my-special-button");

const myName = document.getElementById("my-special-name");

const myInput = document.getElementById('my-special-input');

const greenButton = document.getElementById("green-button");

const mainTag = document.getElementById("main-tag");

const redButton = document.getElementById("red-button");

const blueButton = document.getElementById("blue-button");

myButton.addEventListener('click', () => {
    myName.textContent = myInput.value;
    myInput.value = '';
})

greenButton.addEventListener('click', () => {
    mainTag.style.backgroundColor = "green";
})

redButton.addEventListener('click', () => {
    mainTag.style.backgroundColor = "red";
})

blueButton.addEventListener('click', () => {
    mainTag.style.backgroundColor = "blue";
})