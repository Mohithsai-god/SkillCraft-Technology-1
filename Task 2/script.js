let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(){

let h = String(hours).padStart(2,'0');
let m = String(minutes).padStart(2,'0');
let s = String(seconds).padStart(2,'0');

display.innerHTML = `${h}:${m}:${s}`;

}

function stopwatch(){

seconds++;

if(seconds==60){
seconds=0;
minutes++;
}

if(minutes==60){
minutes=0;
hours++;
}

updateDisplay();

}

document.getElementById("start").onclick=function(){

if(timer!==null) return;

timer=setInterval(stopwatch,1000);

}

document.getElementById("pause").onclick=function(){

clearInterval(timer);
timer=null;

}

document.getElementById("reset").onclick=function(){

clearInterval(timer);
timer=null;

seconds=0;
minutes=0;
hours=0;

updateDisplay();

laps.innerHTML="";

}

document.getElementById("lap").onclick=function(){

if(timer===null) return;

let li=document.createElement("li");

li.textContent=display.innerHTML;

laps.appendChild(li);

}

updateDisplay();