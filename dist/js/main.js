(()=>{"use strict";const e=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),r=document.createElement("div");try{if(!o)throw new Error("Верните форму на место, пожалста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),a=new FormData(o),l={};var n;r.textContent="Загрузка...",o.append(r),a.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:"input"===e.type&&(l[e.id]=t.value)})),(e=>{let t=!0;const o=/[^а-я ]+/i,r=/[^0-9\(\)\-\+]+/i,a=/[^а-я\d\s\.\,\:\;\?\!\-\"\(\)]+/i;return e.forEach((e=>{"user_name"===e.name?o.test(e.value)&&(t=!1,e.style.borderStyle="solid",e.style.borderColor="red"):"user_email"===e.name?""===e.value&&(t=!1,e.style.borderStyle="solid",e.style.borderColor="red"):"user_phone"===e.name?r.test(e.value)&&(t=!1,e.style.borderStyle="solid",e.style.borderColor="red"):"user_message"===e.name?a.test(e.value)&&(t=!1,e.style.borderStyle="solid",e.style.borderColor="red"):t=!0})),t})(e)?(n=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{r.textContent="Спасибо! Наш менджер с вами свяжется!",e.forEach((e=>{e.value="",e.removeAttribute("style")}))})).catch((()=>{r.textContent="Ошибка..."})):(r.textContent="Введите правильные данные",alert("Данные не валидны!!!"))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),l=()=>{let e=(new Date("20 March 2022").getTime()-(new Date).getTime())/1e3;return{timeRemain:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},n=()=>{let e=l(),n=e=>e.toString().length<2?`0${e}`:e;t.textContent=n(e.days),o.textContent=n(e.hours),r.textContent=n(e.minutes),a.textContent=n(e.seconds)};let c=setInterval((()=>{l().timeRemain>0?n():(clearInterval(c),t.textContent="00",o.textContent="00",r.textContent="00",a.textContent="00")}),1e3);n()})(),(()=>{const e=document.querySelector("body"),t=document.querySelector("menu"),o=t.querySelectorAll("ul a"),r=document.querySelector("main a"),a=()=>{t.classList.toggle("active-menu")},l=e=>{let t=e.hash.substring(1);document.getElementById(t).scrollIntoView({block:"start",behavior:"smooth"})};e.addEventListener("click",(e=>{e.target.classList.contains("close-btn")||e.target.closest(".menu")?a():!t.classList.contains("active-menu")||e.target.classList.contains("active-menu")||e.target.closest("menu li")?e.target.closest("main a")?(e.preventDefault(),l(r)):e.target.closest("menu li a")&&o.forEach((t=>{t===e.target&&(a(),e.preventDefault(),l(t))})):a()}))})(),(()=>{let e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(()=>{t=document.querySelector(".popup-content"),e.style.display="block",window.innerWidth>768&&(({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function a(l){let n=(l-r)/o;n>1&&(n=1);let c=e(n);t(c),n<1&&requestAnimationFrame(a)}))})({duration:250,timing:e=>Math.pow(e,2),draw(e){t.style.left=-t.offsetWidth+"px",t.style.left=35*e+"%"}})}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.getElementById("form2-message"),t=document.querySelectorAll("form input[type='text']"),o=document.querySelectorAll("form input[type='email']"),r=document.querySelectorAll("form input[type='tel']"),a=document.querySelectorAll(".calc-block input"),l=/[^а-я\- ]+/i,n=/[^a-z\@\-\_\.\!\~\*\']+/i,c=/[^0-9\(\)\-\+]+/i,s=/[^0-9]+/i,i=/[^а-я\d\s\.\,\:\;\?\!\-\"\(\)]+/i,d=/(\-+)/g,u=/(\s+)/g,m=/^\-|\-$/g,v=/^\s+|\s+$/g;t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(l,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(n,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(c,"")}))})),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(i,"")})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(s,"")}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(d,"-").replace(u," ").replace(m,"").replace(v,""),e.target.value=e.target.value.toLowerCase(),e.target.value=e.target.value.replace(/^[а-я]{1}|\s{1}[а-я]{1}/gi,(e=>e.toUpperCase()))}))})),o.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(d,"-").replace(u," ").replace(m,"").replace(v,"")}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(d,"-").replace(u," ").replace(m,"").replace(v,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const r=e.target.closest(".service-header-tab");r&&t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}))})(),((...e)=>{let t=e,o=t.shift(),r=t.pop();const a=document.querySelector(".portfolio-content"),l=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots");let c,s=0,i=0;for(;i<l.length;){const e=document.createElement("li");e.classList.add("dot"),n.append(e),i++}const d=document.querySelectorAll(".dot");d[0].classList.add("dot-active");const u=document.getElementsByClassName(o),m=document.getElementsByClassName(r);if(!u&&!m)return void console.log("no");const v=(e,t,o)=>{e[t].classList.remove(o)},p=(e,t,o)=>{e[t].classList.add(o)},g=()=>{v(l,s,o="portfolio-item-active"),v(d,s,r="dot-active"),s++,s>=l.length&&(s=0),p(l,s,o="portfolio-item-active"),p(d,s,r="dot-active")},y=(e=1500)=>{c=setInterval(g,e)};a.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(v(l,s,o="portfolio-item-active"),v(d,s,r="dot-active"),e.target.matches("#arrow-right")?s++:e.target.matches("#arrow-left")?s--:e.target.classList.contains("dot")&&d.forEach(((t,o)=>{e.target===t&&(s=o)})),s>=l.length&&(s=0),s<0&&(s=l.length-1),p(l,s,o="portfolio-item-active"),p(d,s,r="dot-active"))})),a.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),a.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&y(2e3)}),!0),y(2e3)})("portfolio-item-active","dot-active"),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),n=document.getElementById("total");let c;t.addEventListener("change",(t=>{if(t.target===o||t.target===r||t.target===a||t.target===l){clearInterval(c),n.textContent=0;let t=(()=>{const t=Number(o.options[o.selectedIndex].value),n=Number(r.value);let c=0,s=1,i=1;return a.value>1&&(s+=Number(a.value)/10),l.value&&l.value<5?i=2:l.value&&l.value<10&&(i=1.5),c=o.value&&r.value?e*t*n*s*i:0,c})(),s=0;c=setInterval((()=>{s>=t?clearInterval(c):s<500?(s+=10,n.textContent=s):(s+=100,n.textContent=s)}),1)}}))})(100),e({formId:"form1"}),e({formId:"form3"}),e({formId:"form2"})})();