const openTaskBarDiv = document.querySelector('.openTaskbar');
const taskbarArea = document.querySelector('.taskbarArea');
const taskbar = document.querySelector('.taskbar');
const windowMinWidth = 200;
const windowMinHeight = 200;

//Check when right click is pressed
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
})

openTaskBarDiv.addEventListener('mousemove', () => {
 if(taskbarArea.classList.contains('hidden')) {
  taskbarArea.classList.remove('hidden');
  taskbarArea.classList.add('shown');
 }
})

taskbarArea.addEventListener('mouseleave', () => {
    if(taskbarArea.classList.contains('shown') && !taskbar.classList.contains('context-menu-open')) {
    taskbarArea.classList.remove('shown');
    taskbarArea.classList.add('hidden');
    }
})

const dateLabel = document.getElementById('date');
const timeLabel = document.getElementById('time');
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



function updateClock() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    let minute = date.getMinutes();
    const second = date.getSeconds();
    const dayOfWeek = date.getDay();
    // Convert to 12 hour time
    const hour12 = (hour > 12) ? hour - 12 : hour;
    const amPm = (hour >= 12) ? "PM" : "AM";
    dateLabel.innerHTML = `${dayNames[dayOfWeek]} ${monthNames[month]} ${day}`;
    if(minute < 10){
      minute = "0" + minute.toString()
    }
    timeLabel.innerHTML = `${hour12}:${minute} ${amPm}`;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();

const navBar = document.querySelector('.navBar');
const appleLogo = document.querySelector('.aLogo');


let selectedApp = document.querySelector('.navBar-left .selected-app');
let navBarItems = document.querySelectorAll('.navBar-left .app-options .menu-item');

let navBarSelected = false;

navBar.addEventListener('click', (e) => {
    
    if(!e.target.classList.contains('selected') || !e.target.parentElement.classList.contains('selected')) {
      navBarSelected = true;
      navBar.classList.add('navSelected');
      console.log('clicked nav bar', e.target); 
      if(e.target.classList.contains('menu-item') ){
        console.log("clicked menu item")
        e.target.classList.add('menu-item-hover');
        e.target.classList.add('menu-item-selected');
      } else if(e.target.parentElement.classList.contains('menu-item')){
        console.log("clicked menu item child")
        e.target.parentElement.classList.add('menu-item-hover');
        e.target.parentElement.classList.add('menu-item-selected');
      } else if(e.target.classList.contains('logo-container')){
        e.target.classList.add('menu-item-hover')
        e.target.classList.add('menu-item-selected')
      } else if (e.target.parentElement.classList.contains('logo-container')){
        e.target.parentElement.classList.add('menu-item-hover')
        e.target.parentElement.classList.add('menu-item-selected')
      }
    }
    
})

navBarItems.forEach(item => {
    console.log(item)
    let itemLabel = item.querySelector('label');
    console.log(itemLabel)
    
   
})

document.addEventListener('click', (e) => {
  //Check if the click was outside of the logo container
  
  let doesContain = false;
  console.log("Doc Clicked Target",e.target)
  navBarItems = document.querySelectorAll('.navBar-left .app-options .menu-item');
  navBarItems.forEach(item => {
    if(item.contains(e.target)) {
        doesContain = true;
    }
  })
  if(!doesContain ) {
      navBarSelected = false;
      navBar.classList.remove('navSelected');
      if(document.querySelector('.menu-item-selected')){
      document.querySelector('.menu-item-selected').classList.remove('menu-item-hover');
      document.querySelector('.menu-item-selected').classList.remove('menu-item-selected');
      }

  }

  if((e.target.nodeName.toLowerCase() === 'body' || e.target.nodeName.toLowerCase() === 'html') && !document.querySelector('.selected-app.finder')){
    const appOptions = createNavBarOptions('finder');
    document.querySelector('.app-options').parentElement.replaceChild(appOptions, document.querySelector('.app-options'));
  
  }
})

const batteryCharge = document.getElementById('batteryCharge');
const batteryIcon = document.getElementById('batteryIcon');

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
      console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
    }
  
    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
      console.log(`Battery level: ${battery.level * 100}%`);
        batteryCharge.innerHTML = `${battery.level * 100}%`;
    }
  
    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo();
    });
    function updateChargingInfo() {
      console.log(`Battery charging time: ${battery.chargingTime} seconds`);
    }
  
    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo();
    });
    function updateDischargingInfo() {
      console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
    }
  });

const windows = document.querySelectorAll('.window');

const quitAppMenuItems = document.querySelectorAll('.submenu .quit-app');

quitAppMenuItems.forEach(quitAppMenuItem => {
  
})


const chromeTabs = document.querySelectorAll('.chrome-tabs .chrome-tab');

chromeTabs.forEach(tab => {
  
})

