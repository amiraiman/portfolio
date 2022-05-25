"use strict";

function updateAge(selector) {
  const birthYear = 1999;
  const currYear = new Date().getFullYear();
  const age = currYear - birthYear;
  document.querySelector(selector).innerText = age;
}

updateAge("#myAge");
