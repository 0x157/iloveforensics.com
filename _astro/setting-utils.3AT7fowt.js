const s="light",o="dark",a="auto",r=a;function c(){const e=document.getElementById("config-carrier");return parseInt(e?.dataset.hue||"250")}function n(){const e=localStorage.getItem("hue");return e?parseInt(e):c()}function u(e){localStorage.setItem("hue",String(e));const t=document.querySelector(":root");t&&t.style.setProperty("--hue",e)}function m(e){switch(localStorage.setItem("theme",e),e){case s:document.documentElement.classList.remove("dark");break;case o:document.documentElement.classList.add("dark");break;case a:window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}function d(){return localStorage.getItem("theme")||r}export{a as A,o as D,s as L,c as a,d as b,m as c,n as g,u as s};