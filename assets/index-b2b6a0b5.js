(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=c(t);fetch(t.href,l)}})();new Swiper(".our-products-swiper",{slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.5},846:{slidesPerView:3},1200:{slidesPerView:4}},loop:!0,slidesToScroll:1,speed:2e3,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3}});new Swiper(".reviews-swiper",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:28}},loop:!0,slidesToScroll:1,speed:2e3,slideToClickedSlide:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3}});const n={openModalBtn:document.querySelector("[data-subscribe-modal-open]"),closeModalBtn:document.querySelector("[data-subscribe-modal-close]"),modal:document.querySelector("[data-subscribe-modal]"),body:document.querySelector("[data-body]")};n.openModalBtn.addEventListener("click",s);n.closeModalBtn.addEventListener("click",s);function s(e){n.modal.classList.toggle("is-hidden"),n.body.classList.toggle("no-scroll")}(()=>{const e={openModalBtn:document.querySelector("[review-modal-open]"),closeModalBtn:document.querySelector("[review-modal-close]"),modal:document.querySelector("[review-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[buy-now-modal-open]"),closeModalBtn:document.querySelector("[buy-now-modal-close]"),modal:document.querySelector("[buy-now-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-orange-open]"),closeModalBtn:document.querySelector("[data-modal-orange-close]"),modal:document.querySelector("[data-modal-orange]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-orange-second-open]"),closeModalBtn:document.querySelector("[data-modal-orange-second-close]"),modal:document.querySelector("[data-modal-second-orange]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();
