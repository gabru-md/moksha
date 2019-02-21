let off_overlay = (b) => {
  document.getElementById(b).style.display = "none";
}

let on_overlay = (b) => {
  document.getElementById(b).style.display = "block";
  window.history.pushState({'sv':'#rv'}, '', '/#/home');
}
window.addEventListener("popstate", function(e) {
  var events = document.getElementById('_events');
  var home = document.getElementById('_home');
  var data = document.getElementById('data');
  var data_mob = document.getElementById('data-mob');
  var arr = ["_pronite", "_music", "_dance", "_theatre", "_literary", "_gaming", "_talent", "_informal", "_automobile"];
  if (events.style.color === "white") {
    if(data.getElementsByTagName('img').length === 0 
      &&
      data_mob.getElementsByTagName('img').length === 0) {
      offExcept(events);
    }else{
    arr.forEach(element => {
      var el = document.getElementById(element);
      if(el.style.display === "block") {
        offExcept(events, true);
        console.log(el);
        console.log(element.split('_')[1]);
        document.getElementById(element.split('_')[1]).click();
        return;
      }
    });
  }
    //events.click();
  }else{
    home.click();
  }
});

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

let offExcept = (ele, fast=false) => {
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

  if(fast) {
    arr.forEach(element =>{
      if(element===val){
        on_overlay(element);
        document.getElementById(ele.id).style.color = "white";
      }
      else{
        off_overlay(element);
      }
    })
  }else{
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
}

let hideAllEventsExcept = (id) => {
  var arr = ["_pronite", "_music", "_dance", "_theatre", "_literary", "_gaming", "_talent", "_informal", "_automobile"];
 //off_overlay("back");
  arr.forEach(element => {
    if (element === id) {
      document.getElementById(element).style.display = "block";
     //on_overlay("back");
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
 //off_overlay("back");
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
 //off_overlay("back");
}
change = (element) => {
  changeView(element);
 //off_overlay("back");
}

// initial

hideAllInitially();
//off_overlay("back");
function check_url(){
  var loc = window.location.href;
  if(loc.split('?').length > 1) {
    arr = loc.split('?')[1].split('&');
    event_cat = decodeURI(arr[0].split('=')[1]);
    event_name = decodeURI(arr[1].split('=')[1]);
    console.log(event_cat);
    console.log(event_name);
    events = document.getElementById('_events'); 
    offExcept(events, true);
    if(document.getElementById(event_cat)){
      document.getElementById(event_cat).click();
      cat_div = document.getElementById("_" + event_cat);
      btns = cat_div.getElementsByTagName('button');
      setTimeout(function(){
        btns = Array.prototype.slice.call(btns);
        btns.forEach(element => {
          if(element.value.toLowerCase().startsWith(event_name.toLowerCase())) {
            element.click();
            return;
          }
        });
      }, 300);
      
      //document.getElementById('_home').click();
    }
    return;
  }
}

check_url();