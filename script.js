// Side bar feature script 

const side_menu_container = document.querySelector(".page-container");

const Main_Menu_button = document.getElementById("Main-Menu-button");

Main_Menu_button.addEventListener("click", () => {
  side_menu_container.classList.toggle("visible");
});


// about me feature script


const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// for viewing the messages on your google sheets 



const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSWWaECApk3NJOruxqPrxBpY0coMh5A9bT3lsUmq9PO4xvSFTc9SblpTaEawxYT8amvg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

