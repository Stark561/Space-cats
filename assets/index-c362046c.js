(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();(()=>{const o=document.querySelector(".js-header-menu-container"),t=document.querySelector(".js-header-open-menu"),s=document.querySelector(".js-header-close-menu"),l=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",l),s.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".our-products-swiper",{slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.5},846:{slidesPerView:3},1200:{slidesPerView:4}},loop:!0,slidesToScroll:1,speed:2e3,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3}});new Swiper(".reviews-swiper",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:28}},loop:!0,slidesToScroll:1,speed:2e3,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3}});const i={modals:[...document.querySelectorAll("[data-modal]")],openBtns:document.querySelectorAll("[data-modal-open]"),closeBtns:document.querySelectorAll("[data-modal-close]")};i.openBtns.forEach(o=>o.addEventListener("click",c));i.closeBtns.forEach(o=>o.addEventListener("click",c));function c(o){const{dataset:t}=o.currentTarget,s=Object.values({...t});i.modals.map(l=>{l.dataset.modal===s[0]&&l.classList.toggle("is-hidden")})}const a=document.querySelectorAll('[name*="form"]'),d=document.querySelectorAll("[data-modal]");a.forEach(o=>{o.addEventListener("submit",t=>{t.preventDefault(),d.forEach(s=>{t.target.name.includes(s.dataset.modal)&&s.classList.toggle("is-hidden")})})});$(document).ready(function(){$("a").on("click",function(o){if(this.hash!==""){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});
