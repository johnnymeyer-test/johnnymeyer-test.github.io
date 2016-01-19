// Variables can be: String, Number, Boolean, Array, Object


// Set h2 to a default welcome message
var mySubHeading = document.querySelector('h2');
localStorage.setItem('name', 'new user');
mySubHeading.innerText = 'Welcome, new user!';


// Provide a button to change the user

function setUserName() {
   var myName = prompt('Please enter your name.');
   localStorage.setItem('name', myName);
   mySubHeading.innerText = 'Welcome, ' + myName + '!';
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
   setUserName();
}

// Allow user to switch between mozilla and google

var myImage = document.querySelector('img');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');
   if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/chrome-icon.png');
      myHeading.innerText = 'Chrome is cool';
   } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
      myHeading.innerText = 'Firefox is cool';
   }
}
