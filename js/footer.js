"use strict";var _localStorage$columns;document.querySelectorAll("footer .popup > button").forEach(function(elem){elem.onclick=function(event){elem.nextElementSibling.classList.toggle("active")}});document.querySelectorAll("footer .popup > .content").forEach(function(elem){elem.onclick=function(event){if(elem===event.target)elem.classList.remove("active")}});document.onkeydown=function(event){if(event.key==="Escape"){var activeElem=document.querySelector("footer .popup > .content.active");activeElem===null||activeElem===void 0?void 0:activeElem.classList.remove("active")}};var themeElem=document.getElementById("theme");themeElem.checked=theme==="dark";themeElem.onchange=function(event){theme=event.target.checked?"dark":"light";setTheme()};var scrollElem=document.getElementById("scroll");scrollElem.checked=localStorage.scroll==="true";scrollElem.onchange=function(event){localStorage.scroll=event.target.checked};var columnsElem=document.getElementById("columns");columnsElem.value=(_localStorage$columns=localStorage.columns)!==null&&_localStorage$columns!==void 0?_localStorage$columns:null;columnsElem.oninput=function(event){var columns=event.target.value;var grid=document.querySelector(".grid");grid.style.gridTemplateColumns=columns?"repeat(".concat(columns,", auto)"):null;localStorage.columns=columns};columnsElem.oninput({target:columnsElem});
