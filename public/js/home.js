let applydefault = (b) => {
  document.getElementById(b).style.color = "rgba(255, 255, 255, .5)";
  document.getElementById(b).style.borderBottomColor = "transparent";
}

let off_overlay = (b) => {
  document.getElementById(b).style.display = "none";
}

let on_overlay = (b) => {
  document.getElementById(b).style.display = "block";
}

let on_overlay2 = (b) => {
  document.getElementById(b).style.display = "flex";
}

let applyprop = (a) => {
  document.getElementsByClassName("nav").focus = "none";
  applydefault("_home");
  applydefault("_events");
  applydefault("_contact");
  document.getElementById(a).style.color = "white";
  document.getElementById(a).style.borderBottomColor = "white";
  document.getElementsByClassName("nav").focus = "auto";
}

let applyprop2 = (a) => {
  document.getElementsByClassName("nav").focus = "none";
  applydefault("_pronite");
  applydefault("_theatre");
  applydefault("_talent");
  applydefault("_music");
  applydefault("_gaming");
  applydefault("_automobile");
  applydefault("_dance");
  applydefault("_literary");
  applydefault("_informal");
  document.getElementById(a).style.color = "white";
  document.getElementById(a).style.borderBottomColor = "white";
  document.getElementsByClassName("nav").focus = "auto";
}

var countDownDate = new Date("Mar 14, 2019 00:00:01").getTime();

var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('.countdown1').html(days + "d " + hours + "h " );
  $('.countdown2').html( minutes + "m "+" " + seconds + "s");
  if (distance < 0) {
    clearInterval(countDown);
    $('.countdown1').html('wait is over');
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
}, 300);

function on_event_data(){
  off_overlay("overlay_events");
  on_overlay("super_overlay_events");
  document.getElementById("navcss2").style.display = "flex";
}

function off_event_data(){
  off_overlay("super_overlay_events");
  off_overlay("navcss2");
}

function on_events() {
  blurit();
  setTimeout(function () {
    off_contacts();
    // off_event_data();
    on_overlay("overlay_events");
    applyprop("_events");
    off_overlay("super_overlay_events");
  }, 300);
  hideAllInitially();
}

function off_events() {
  off_overlay("overlay_events");
  applyprop("_home");
}


function on_contacts() {
  blurit();
  setTimeout(function () {
    off_events();
    off_overlay("super_overlay_events");
    // off_event_data();
    on_overlay("overlay_contacts");
    applyprop("_contact");
  }, 300);
}

function off_contacts() {
  off_overlay("overlay_contacts");
  applyprop("_home");
}

function on_home() {
  unblurit();
  off_events();
  off_contacts();
  off_overlay("super_overlay_events");
  // off_event_data();
  applyprop("_home");
  // document.getElementById("_home").className = ".blur";

}

let blurit = () => {
  document.getElementById("bg-img").classList.remove("unblur");
  document.getElementById("bg-img").classList.add("blur");
  // document.getElementById("bg-img").classList.add("overlay");
}

let unblurit = () => {
  document.getElementById("bg-img").classList.add("unblur");
  document.getElementById("bg-img").classList.remove("blur");
}

let  hideAllEventsExcept = (id) => {
  var arr = ["_pronite","_music","_dance","_theatre","_literary","_gaming","_talent","_informal","_automobile"];
  arr.forEach(element => {
    if(element === id) {
      document.getElementById(element).style.display="block";
    }else{
    document.getElementById(element).style.display="none";
    }
  });
}
let hideAllInitially = () => {
  var arr = ["_pronite","_music","_dance","_theatre","_literary","_gaming","_talent","_informal","_automobile"];
  arr.forEach(element => {
    document.getElementById(element).style.display="none";
  });
}

on_events_detail = ()=>{
  off_overlay("overlay_events");
  on_overlay("super_overlay_events");
}

function changeView(element) {
  // on_event_data();
  // showNav2();
  on_events_detail();
  hideAllEventsExcept(element.value);
}


// initial

hideAllInitially();