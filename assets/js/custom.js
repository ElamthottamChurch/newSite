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

window.addEventListener("load", function () {
  let container = document.getElementById("yt-video");
  container.innerHTML = `
                <video autoplay="" muted="" loop="" playsinline="" class="video-background">
                    // <source src="assets/videos/churchVideoCompressed.mp4" type="video/mp4">
                    src="https://www.youtube.com/embed/7aTpp2Z_4Q4?autoplay=1&mute=1&loop=1&playlist=7aTpp2Z_4Q4"
                </video>
                <iframe
                    src="https://www.youtube.com/embed/7aTpp2Z_4Q4?autoplay=1&mute=1&loop=1&playlist=7aTpp2Z_4Q4"
                    width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
});

