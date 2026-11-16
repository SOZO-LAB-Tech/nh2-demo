(function(){
  const el=document.documentElement;
  const isFs=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
  const sync=()=>document.querySelectorAll(".fs-btn").forEach(b=>{const on=isFs();b.setAttribute("aria-pressed",on);b.setAttribute("aria-label",on?"Exit full screen":"Full screen");b.title=on?"Exit full screen (Esc)":"Full screen";b.innerHTML=ic(on?"min":"max");});
  document.addEventListener("click",e=>{const b=e.target.closest(".fs-btn");if(!b)return;e.preventDefault();e.stopPropagation();
    try{if(isFs()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);}else{const r=(el.requestFullscreen||el.webkitRequestFullscreen);if(r){const p=r.call(el);if(p&&p.catch)p.catch(()=>{b.title="Full screen isn't allowed in this view — open the page in its own tab";});}}}catch(_){}
  },true);
  document.addEventListener("fullscreenchange",sync);document.addEventListener("webkitfullscreenchange",sync);
})();
