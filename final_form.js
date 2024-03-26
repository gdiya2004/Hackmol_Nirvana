const firebaseConfig = {
    apiKey: "AIzaSyCzbqgSZfezwugMLc6KbpY_JqMoW2Knv60",
    authDomain: "mood-list-721cc.firebaseapp.com",
    databaseURL: "https://mood-list-721cc-default-rtdb.firebaseio.com",
    projectId: "mood-list-721cc",
    storageBucket: "mood-list-721cc.appspot.com",
    messagingSenderId: "360549466461",
    appId: "1:360549466461:web:d9254900782390101de8b4",
    measurementId: "G-THEWMG8FQQ"
  };
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var date=getElementVal("date");
  var timeslots=getElementVal("timeslots");

  saveMessages(name, emailid, msgContent,date);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent,date,timeslots) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    date:date,
    timeslots:timeslots
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())
})