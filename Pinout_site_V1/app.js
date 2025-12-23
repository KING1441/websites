// app.js

const root = document.documentElement;
const btn = document.getElementById("themeBtn");
const label = document.getElementById("themeLabel");

function syncLabel() {
  const isDark = root.getAttribute("data-theme") === "dark";
  // label shows what you'll switch TO
  label.textContent = isDark ? "Light" : "Dark";
}

function setTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
  syncLabel();
}

// init from storage (default light)
const saved = localStorage.getItem("theme");
setTheme(saved === "dark" ? "dark" : "light");

// click toggle
btn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});
