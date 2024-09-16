const bodyE1 = document.querySelector('body');
bodyE1.addEventListener("mousemove",(event)=>{
   const xPos = event.offsetX
   const yPos = event.offsetY
   const spanEl = document.createElement('span');
   spanEl.style.left = xPos + "px";
   spanEl.style.top = yPos + "px";  // Added top positioning for the Y coordinate
   spanEl.style.position = "absolute";  
   // Make sure the span is positioned absolutely
   const size = Math.random()*100;
   spanEl.style.width = size + "px";
   spanEl.style.height = size + "px";
   bodyE1.appendChild(spanEl);
  setTimeout(()=>spanEl.remove(),3000);
});