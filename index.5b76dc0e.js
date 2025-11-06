var e=document.querySelector(".gallery__list"),t=document.querySelector("#largeImg");e.addEventListener("click",function(e){var r=e.target.closest(".list-item"),i=r.querySelector("a").getAttribute("href"),o=r.querySelector("img").getAttribute("src");e.preventDefault(),t.setAttribute("src",window.location.origin+i||window.location.origin+o)});
//# sourceMappingURL=index.5b76dc0e.js.map
