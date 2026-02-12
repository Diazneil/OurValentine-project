const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;

const gifs = [
  "cat-heart.gif",
  "3shocked-1.gif",
  "4.crying.gif",
  "5.crying.gif",
  "idc.gif"
];

gifs.forEach(src=>{
  const img = new Image();
  img.src = src;
});


// NO BUTTON
no.addEventListener("click",()=>{

  // BESARKAN TANPA MERUSAK LAYOUT
  yes.style.transform = "scale(1.15)";

  if(count===2){
    gif.src="3shocked-1.gif";
    text.innerHTML="You meant to press YES right? 🤨";
    count++;

  }else if(count===3){
    gif.src="4.crying.gif";
    text.innerHTML="Your hand slipped right? 🥹";
    count++;

  }else if(count===4){
    gif.src="5.crying.gif";
    text.innerHTML="Ayang please... I'm gonna cry 😭";
    count++;

  }else{
    gif.src="5.crying.gif";
    text.innerHTML="Pretty please 🥺❤️";
    no.style.display="none";
  }
});


// YES BUTTON
yes.addEventListener("click",()=>{

  vid.style.display="block";

  gif.src="idc.gif";
  text.innerHTML="Thank you ayangg! ❤️";

  yes.innerHTML =
  '<a href="https://wa.me/6289628116619" target="_blank">Message me</a>';

  no.style.display="none";

  setTimeout(()=>{
    vid.style.display="none";
  },9000);
});
