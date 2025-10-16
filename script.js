const pages = document.querySelectorAll('.page');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const backBtn = document.getElementById('backBtn');
const yearEl = document.getElementById('year');

const articles = [
  {
    title: "The Art of Simplicity",
    content: "<p>Simplicity is the ultimate sophistication...</p>"
  },
  {
    title: "Focus in a Distracted World",
    content: "<p>In a world filled with noise, true focus is rare...</p>"
  },
  {
    title: "Designing Without Color",
    content: "<p>Sometimes grayscale can speak louder than colors...</p>"
  }
]

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function showPage(id) {
  pages.forEach(page => {
    page.style.visibility = 'hidden';
  });
  document.getElementById(id).style.visibility = 'visible';
}


homeLink.onclick = () => showPage('homePage');
aboutLink.onclick = () => showPage('aboutPage');
backBtn.onclick = () => showPage('homePage');



// function openArticle(id) {
//   const article = articles[i];
//   const content = document.getElementById('articleContent');
//   content.innerHTML = `<h2>${article.title}</h2>${article.content}`;
//   showPage('articlePage');
// }

function toggleButton() {
  var button = document.getElementById("myButton");
  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function toggleButton1() {
  var button = document.getElementById("myButton1");
  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function toggleButton2() {
  var button = document.getElementById("myButton2");
  if (button.style.display === "none") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}





document.getElementById('aboutLink').addEventListener('click', function () {
  const element = document.getElementById('class20');
  element.classList.remove('hidden2'); // Removes the 'hidden' class
});


