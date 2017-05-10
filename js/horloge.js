class Alarme{

  constructor(objJson){   
    this.alarmSon = objJson.alarmSounds; 
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  
  t = setInterval(function() {
    var today = new Date();
  var n = today.toLocaleTimeString();  
  document.getElementById('span_horloge').innerHTML = n;

  }, 500);
}
startTime();

document.getElementById("btn_ajouterAlarme").addEventListener("click", function(){  

    var hr2    = document.getElementById('select_alarmeHeures').value;
    var min2   = document.getElementById('select_alarmeMinutes').value;
    var sec2   = document.getElementById('select_alarmeSecondes').value;
    var audio = new Audio(alarmSon[optionSelected[3].selectedIndex]);
    var alarm = new Date();    
    alarm.setHours(alarm.getHours()+parseInt(hr2),alarm.getMinutes()+parseInt(min2),alarm.getSeconds()+parseInt(sec2),0);
    var courentTime = new Date();
     var dif = alarm.getTime()-courentTime.getTime();
     var timeoutID = window.setTimeout(function() { 
           audio.play()
         }, dif);

    document.querySelector('#alarme h1').innerHTML= alarm;
});

var button = document.createElement("BUTTON");
button.innerHTML = "Select sound";
button.style.marginLeft = "27%";
var selecteur = document.createElement("SELECT");
selecteur.setAttribute("id", "choix_son");
for(var i = 0; i < 4; i++){
  var option = document.createElement("OPTION"); 
  option.setAttribute("value", i); 
  option.innerHTML = i+1;   
  selecteur.appendChild(option); 
  console.log(option); 
}
var setAlarme;

document.body.appendChild(button);
document.body.appendChild(selecteur);

var optionSelected = document.getElementsByTagName("select");
console.log(optionSelected);

var jsonAlarm = {"alarmSounds" : ["mp3/alarm1.mp3", "mp3/alarm2.mp3", "mp3/alarm3.mp3", "mp3/alarm4.mp3"]};

var setAlarm = new Alarme(jsonAlarm);
var alarmSon = setAlarm.alarmSon;












































