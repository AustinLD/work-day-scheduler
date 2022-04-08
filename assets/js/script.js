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
  colorChanger() // calls color updater function
});



function colorChanger() {
for (let i = 9; i < 18; i++) {
  const element = document.getElementById(`${i}`);
  if (currentHour > i) {
    $(element).addClass("past");
  } else if (currentHour < i) {
    $(element).addClass("future") 
  } else {
    $(element).addClass("present")
  }
  
}
}
      
    




