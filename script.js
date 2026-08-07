/* ========================================
   SMOOTH SCROLL REVEAL
======================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


/* ========================================
   FLOATING HERO IMAGE
======================================== */

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

let angle=0;

setInterval(()=>{

angle+=0.02;

heroImage.style.transform=
`translateY(${Math.sin(angle)*8}px)`;

},25);

}


/* ========================================
   NAVBAR SCROLL EFFECT
======================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(255,255,255,.92)";
navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";
navbar.style.top="10px";

}else{

navbar.style.background="rgba(255,255,255,.65)";
navbar.style.boxShadow="0 10px 40px rgba(0,0,0,.08)";
navbar.style.top="20px";

}

});


/* ========================================
   RIPPLE BUTTON EFFECT
======================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/* ========================================
   TOAST NOTIFICATION
======================================== */

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML="✅ "+message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},50);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}


/* ========================================
   REPLACE ALERT()
======================================== */

const oldAddToCart=window.addToCart;

window.addToCart=function(id){

oldAddToCart(id);

showToast("Added to cart!");

};


/* ========================================
   PARALLAX BACKGROUND
======================================== */

window.addEventListener("scroll",()=>{

document.body.style.backgroundPositionY=
window.scrollY*.15+"px";

});