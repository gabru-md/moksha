// document.addEventListener("DOMContentLoaded", function () {
//   var myfullpage = new fullpage("#fullpage", {
//     anchors: ["about", "events", "contact_us"],
//     onLeave: function (origin, destination, direction) {
//       var leavingSection = this;
//       document.getElementsByClassName("nav").focus = "none";
//       document.getElementById("_" + origin.anchor).style.color = "rgba(255, 255, 255, .5)";
//       document.getElementById("_" + origin.anchor).style.borderBottomColor = "transparent";
//       document.getElementById("_" + destination.anchor).style.color = "white";
//       document.getElementById("_" + destination.anchor).style.borderBottomColor = "white";
//       document.getElementsByClassName("nav").focus = "auto";
//     }
//   });
// });

let applydefault = (b) => {
  document.getElementById(b).style.color = "rgba(255, 255, 255, .5)";
  document.getElementById(b).style.borderBottomColor = "transparent";
}

let applyprop = (a) => {
  document.getElementsByClassName("nav").focus = "none";
  applydefault("_home");
  applydefault("_volunteers");
  applydefault("_contact");
  document.getElementById(a).style.color = "white";
  document.getElementById(a).style.borderBottomColor = "white";
  document.getElementsByClassName("nav").focus = "auto";
}

var countDownDate = new Date("Mar 16, 2019 00:00:01").getTime();

var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('#countdown1').html(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

  if (distance < 0) {
    clearInterval(countDown);
    $('#countdown1').html('wait is over');
  }
}, 1000);

let x = 0;

var flutter = setInterval(() => {
  if (x === 0) {
    x = 1;
    document.getElementById("logo2").hidden = false;
  }
  else {
    x = 0;
    document.getElementById("logo2").hidden = true;
  }
}, Math.random());


function on_volunteers() {
  off_contacts();
  document.getElementById("overlay_volunteers").style.display = "block";
  applyprop("_volunteers");
  blurit();
}

function off_volunteers() {
  document.getElementById("overlay_volunteers").style.display = "none";
  applyprop("_home");
}


function on_contacts() {
  off_volunteers();
  document.getElementById("overlay_contacts").style.display = "block";
  applyprop("_contact");
  blurit();
}

function off_contacts() {
  document.getElementById("overlay_contacts").style.display = "none";
  applyprop("_home");
}

function on_home() {
  off_volunteers();
  off_contacts();
  applyprop("_home");
  unblurit();
  // document.getElementById("_home").className = ".blur";

}

let blurit = () => {
  document.getElementById("bg-img").classList.remove("unblur");
  document.getElementById("bg-img").classList.add("blur");
}

let unblurit = () => {
  document.getElementById("bg-img").classList.add("unblur");
  document.getElementById("bg-img").classList.remove("blur");
}