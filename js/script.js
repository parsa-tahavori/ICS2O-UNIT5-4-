// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-04-/sw.js", {
    scope: "/ICS2O-unit5-04-/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const age = parseInt(document.getElementById("age").value)
  const day = String(document.getElementById("day").value)

  if (day == "thursday" || day == "tuesday" || (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML = "You can get a discount!"
  } else {
    document.getElementById("answer").innerHTML = "You can't get a discount"
  }
}
