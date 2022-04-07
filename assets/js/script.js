var timeofDay = document.querySelector("#currentDay")
const entries = document.getElementsByClassName("information");



var currentHour = moment().hour();
var currentDay = moment().day();

var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
timeofDay.textContent= currentTime;


var update = function() {
  timeofDay.innerHTML = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}; setInterval(update, 1000);







Array.from(entries).forEach(information => {
  let
    rowIdString = information.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      row.addclass(".present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}















$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".information").val()
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    localStorage.getItem(time, value);
  })
  function colorUpdater() {
    Array.from(entries).forEach(information => {
      let
        rowIdString = information.id,
        rowHour;
      if (rowIdString) {
        rowHour = parseInt(rowIdString);
      }
      if (rowHour) {
        if (currentHour === rowHour) {
          entries.classlist.add("present");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
          setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
          setColor(row, "lightgrey");
        } else {
          setColor(row, "white");
        }
      }
    });
  }


})



// function colorUpdater() {
//   Array.from(entries).forEach(information => {
//     let
//       rowIdString = information.id,
//       rowHour;
//     if (rowIdString) {
//       rowHour = parseInt(rowIdString);
//     }
//     if (rowHour) {
//       if (currentHour === rowHour) {
//         row.addclass(".present");
//       } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//         setColor(row, "green");
//       } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//         setColor(row, "lightgrey");
//       } else {
//         setColor(row, "white");
//       }
//     }
//   });
// }



















$("#9 .information").val(localStorage.getItem("9"));
$("#10 .information").val(localStorage.getItem("10"));
$("#11 .information").val(localStorage.getItem("11"));
$("#12 .information").val(localStorage.getItem("12"));
$("#13 .information").val(localStorage.getItem("13"));
$("#14 .information").val(localStorage.getItem("14"));
$("#15 .information").val(localStorage.getItem("15"));
$("#16 .information").val(localStorage.getItem("16"));
$("#17 .information").val(localStorage.getItem("17"));

// $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));









// // var nterval = setInterval(colorUpdater, 15000);