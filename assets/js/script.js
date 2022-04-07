// populates value of .information on page from local storage
$("#9 .information").val(localStorage.getItem("9"));
$("#10 .information").val(localStorage.getItem("10"));
$("#11 .information").val(localStorage.getItem("11"));
$("#12 .information").val(localStorage.getItem("12"));
$("#13 .information").val(localStorage.getItem("13"));
$("#14 .information").val(localStorage.getItem("14"));
$("#15 .information").val(localStorage.getItem("15"));
$("#16 .information").val(localStorage.getItem("16"));
$("#17 .information").val(localStorage.getItem("17"));

//targets currentDay ID in HTML
var timeofDay = document.querySelector("#currentDay")

//targets ALL divs with row class in HTML
const entries = document.querySelectorAll(".row");

// variables equal to current hour / day
var currentHour = moment().hour();
var currentDay = moment().day();

// formats the date and time on the top of the page
var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
timeofDay.textContent= currentTime;

// updates the date on the top of the page automatically.
var update = function() {
  timeofDay.innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}; setInterval(update, 1000);


// function executes as soon as page loads
$(document).ready(function() {
  $(".saveBtn").on("click", function() { // listens to saveBtn for on click
    var value = $(this).siblings(".information").val() // variable storing value of all siblings of .saveBtn with .information class
    var time = $(this).parent().attr("id"); // stores ID attribute of parent div of .saveBtn
    localStorage.setItem(time, value); // stores time and value variables in local storage
  })
  colorUpdater() // calls color updater function
});


// changes color of .row based on time of day relative to the rows dedicated time
function colorUpdater() {
  Array.from(entries).forEach(row => { // calls the function below for each .row inside of entries. entries = .row
    let
    rowIdString = row.id // 
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      if (currentHour === rowHour) {
        $(".information").addClass("present");
      } else if (currentHour < rowHour) {
        $(".information").addClass("future");
      } else if (currentHour > rowHour) {
        $(".information").addClass("past");
      }
    }
  });
}