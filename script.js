let sound = new Audio("https://freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav")
sound.loop = true;
let clock = document.getElementById("clock")
let currentTime = setInterval(function () {
    let date = new Date();
    let hours = ((date.getHours()));
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = (date.getHours()) < 12 ? 'AM' : "PM";
    if (hours < 0) {
        hours = hours * -1
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours
    }
    clock.textContent = addZero(hours) + ':' + addZero(minuts) + ':' + addZero(seconds);

}, 1000)
function addZero(time) {
    return (time < 10) ? "0" + time : time;
}
//hours menu

function hoursMenu() {
    let select = document.getElementById("alarmhrs");
    let hrs = 12;
    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
hoursMenu();

//minuts
function minutsMenu() {
    let select = document.getElementById("alarmmins");
    let mint = 59;
    for (i = 1; i <= mint; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minutsMenu();


//second
function secondMenu() {
    let select = document.getElementById("alarmsecs");
    let sec = 60;
    for (i = 1; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secondMenu();


//set alarm
function setAlarm() {
    let hr = document.getElementById("alarmhrs");
    let min = document.getElementById("alarmmins");
    let sec = document.getElementById("alarmsecs");
    let ap = document.getElementById("ampm");

    let selectHours = hr.options[hr.selectedIndex].value;
    let selectMinuts = min.options[min.selectedIndex].value;
    let selectSecond = sec.options[sec.selectedIndex].value;
    let selectAp=ap.options[ap.selectedIndex].value;

    let alarmTime = addZero(selectHours) + ":" +
        addZero(selectMinuts) + ":" +
        addZero(selectSecond) + ":" +
        addZero(selectAp);
       

    document.getElementById("alarmhrs").disabled = true;
    document.getElementById("alarmmins").disabled = true;
    document.getElementById("alarmsecs").disabled = true;
    document.getElementById("alarmampm").disabled = true;


    var clock=document.getElementById("clock");

    //play audio
    setInterval(function () {
        let date = new Date();
        let hours = ((date.getHours()));
        let minuts = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = (date.getHours()) < 12 ? 'AM' : "PM";
        if (hours < 0) {
            hours = hours * -1
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = hours
        }
       let currentTime= clock.textContent = addZero(hours) + ':' + addZero(minuts) + ':' + addZero(seconds);
       if(alarmTime==currentTime)
       {
           sound.play();
       }
    }, 1000)


   


}

function clearAlarm()
{
    document.getElementById("alarmhrs").disabled = false;
    document.getElementById("alarmmins").disabled = false;
    document.getElementById("alarmsecs").disabled = false;
    document.getElementById("alarmampm").disabled = false; 
    sound.pause();  
}