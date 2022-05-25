"use strict";

function updateYearText(selector, offset) {
  const currYear = new Date().getFullYear();
  document.querySelector(selector).innerText = currYear - offset;
}

updateYearText("#myAge", 1999);
updateYearText("#footerYear", 0);
