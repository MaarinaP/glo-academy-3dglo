(()=>{"use strict";(t=>{const e=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),m=document.getElementById("timer-seconds"),r=()=>{let t=(()=>{let t=(new Date("07 March 2022").getTime()-(new Date).getTime())/1e3;return{timeRemain:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),s=t=>t.toString().length<2?`0${t}`:t;e.textContent=s(t.days),n.textContent=s(t.hours),o.textContent=s(t.minutes),m.textContent=s(t.seconds);let a=setInterval((()=>{t.timeRemain>0?r():(clearInterval(a),e.textContent="00",n.textContent="00",o.textContent="00",m.textContent="00")}),1e3)};r()})()})();