import{n as l}from"./assets/vendor-342e672c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const u=document.querySelector("#task-form"),c=document.querySelector("#task-list"),i="tasks";c.addEventListener("click",d);u.addEventListener("submit",f);function d(e){if(e.target.nodeName!=="BUTTON")return;const r=e.target.parentNode.id,s=JSON.parse(localStorage.getItem(i)).filter(t=>t.id!==r);localStorage.setItem(i,JSON.stringify(s)),e.target.parentNode.remove()}function f(e){e.preventDefault(),console.dir(e.currentTarget.elements.taskName.value);const r=e.currentTarget.elements.taskName.value.trim();r&&(p(r),e.currentTarget.reset())}function m(e,r){c.insertAdjacentHTML("beforeend",`<li id='${r}'>${e} <button type="button">X</button></li>`)}function p(e){const r=JSON.parse(localStorage.getItem(i))||[],n=l();console.log(n),r.push({id:n,text:e}),localStorage.setItem(i,JSON.stringify(r)),m(e,n)}function g(){const e=JSON.parse(localStorage.getItem(i));if(!e)return;const r=e.map(({id:n,text:s})=>`<li id='${n}'>${s} <button type="button">X</button></li>`).join("");c.insertAdjacentHTML("beforeend",r)}g();
//# sourceMappingURL=commonHelpers.js.map
