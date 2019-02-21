let off_overlay = (b) => {
  document.getElementById(b).style.display = "none";
}

let on_overlay = (b) => {
  document.getElementById(b).style.display = "block";
}

var countDownDate = new Date("Mar 14, 2019 00:00:01").getTime();

var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('.countdown1').html(days + "d " + hours + "h ");
  $('.countdown2').html(minutes + "m " + " " + seconds + "s");
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
}, Math.random()*200+200);

let blurit = () => {
  document.getElementById("bg-img").classList.remove("unblur");
  document.getElementById("bg-img").classList.add("blur");
}

let unblurit = () => {
  document.getElementById("bg-img").classList.add("unblur");
  document.getElementById("bg-img").classList.remove("blur");
}

let offExcept = ele => {
  val = ele.getAttribute("value");
  let arr = ["overlay_volunteers", "overlay_events", "overlay_contacts", "super_overlay_events"];
  let arr2=[ "_home", "_volunteers", "_events", "_contact"];
  arr2.forEach(id =>{
    document.getElementById(id).style.color = "rgba(255, 255, 255, .5)";
  })
  unblurit(val);
  if(val==="overlay_home"){
    arr.forEach(element =>{
        off_overlay(element);
    })
    document.getElementById(ele.id).style.color = "white";
    return;
  } 
  else{
    blurit(val);
  }
  setTimeout(() => {
    arr.forEach(element =>{
      if(element===val){
        on_overlay(element);
        document.getElementById(ele.id).style.color = "white";
      }
      else{
        off_overlay(element);
      }
    })
  }, 300);
}

let hideAllEventsExcept = (id) => {
  var arr = ["_pronite", "_music", "_dance", "_theatre", "_literary", "_gaming", "_talent", "_informal", "_automobile"];
  off_overlay("back");
  arr.forEach(element => {
    if (element === id) {
      document.getElementById(element).style.display = "block";
      on_overlay("back");
    } else {
      document.getElementById(element).style.display = "none";
    }
  });
}
let hideAllInitially = () => {
  off_overlay("super_overlay_events");
  var arr = ["_pronite", "_music", "_dance", "_theatre", "_literary", "_gaming", "_talent", "_informal", "_automobile"];
  arr.forEach(element => {
    document.getElementById(element).style.display = "none";
  });
}

on_events_detail = () => {
  off_overlay("overlay_events");
  on_overlay("super_overlay_events");
  off_overlay("back");
}

function changeView(element) {
  console.log(window.innerWidth);
  if(window.innerWidth <= 500) {
    console.log('mobile view');
  }
  on_events_detail();
  hideAllEventsExcept(element.value);
}

back = () => {
  document.getElementById("scroll").classList.remove("d-sm-none");
  document.getElementById("scroll").classList.add("d-none");
  document.getElementById("data").classList.remove("d-none");
  document.getElementById("data").classList.add("d-sm-none");
  off_overlay("back");
}
change = (element) => {
  changeView(element);
  off_overlay("back");
}

// initial

hideAllInitially();
off_overlay("back");
