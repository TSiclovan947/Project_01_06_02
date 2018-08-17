/*
      script.js
      Form Validation Functions for index.html
      
      Author: Tabitha Siclovan
      Date: 15 August 2018
      
*/

"use strict";

var formValidity = true;

//Function to validate required fields
function validateRequired() {
    var inputFieldElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputFieldElements.length;
    var fieldsetValidity = true;
    var currentElement = null;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputFieldElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity === false) {
            throw "Please complete all Fields!";
        } else {
            formValidity = true;
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

//Function to validate entire form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

    validateRequired();
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }

}

//Functions to run on page load
function loadingPage() {
    createEventListeners();
}

//Function for creating event listeners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

//Adding event listeners for load event listeners
if (window.addEventListener) {
    window.addEventListener("load", loadingPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", loadingPage);
}
