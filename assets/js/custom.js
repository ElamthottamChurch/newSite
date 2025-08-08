//add event listener to the language switcher

function switchLang() {
  const current = localStorage.getItem("language") || "ml";
  const newLang = current === "ml" ? "en" : "ml";
  localStorage.setItem("language", newLang);
  updateLangUI(newLang);
  location.reload(); // if needed
}

function updateLangUI(lang) {
  document.getElementById("ml").classList.toggle("active", lang === "ml");
  document.getElementById("en").classList.toggle("active", lang === "en");
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "ml";
  updateLangUI(lang);
});

// Get the last Sunday of the month
function getLastSundayOfMonth(monthIndex) {
  const year = new Date().getFullYear();
  const lastDay = new Date(year, monthIndex + 1, 0);
  return lastDay.getDate() - lastDay.getDay();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sebastian-date").textContent = getLastSundayOfMonth(0);   // January
  document.getElementById("antony-date").textContent = getLastSundayOfMonth(10);  // November
  Array.from(document.getElementsByClassName("current-year")).forEach(element => {
    element.textContent = new Date().getFullYear();
  });
});



