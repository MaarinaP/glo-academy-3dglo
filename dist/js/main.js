(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),l=()=>{let e=(new Date("14 March 2022").getTime()-(new Date).getTime())/1e3;return{timeRemain:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};let r=setInterval((()=>{l().timeRemain>0?(()=>{let e=l(),r=e=>e.toString().length<2?`0${e}`:e;t.textContent=r(e.days),n.textContent=r(e.hours),o.textContent=r(e.minutes),c.textContent=r(e.seconds)})():(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00",c.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",c)}))})(),(()=>{const e=document.querySelector(".popup");let t=document.querySelector(".popup-content");const n=e.querySelector(".popup-close"),o=document.querySelectorAll(".popup-btn");let c,l=0;const r=()=>{let e=.5*(window.innerWidth-t.offsetWidth)+50;l++,c=requestAnimationFrame(r),l<e?t.style.left=l+"px":cancelAnimationFrame(c)};o.forEach((n=>{n.addEventListener("click",(()=>{t=document.querySelector(".popup-content"),e.style.display="block",window.innerWidth>768&&(t.style.left=-t.offsetWidth+"px",requestAnimationFrame(r))}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();