"use strict";

// theme toggle — follows the OS until the visitor picks one
const root = document.documentElement;

document.querySelector("[data-theme-toggle]").addEventListener("click", function () {
  const current =
    root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// footer year
document.querySelector("[data-year]").textContent = new Date().getFullYear();
