// Basic interactive behaviors for HQ site
const revealElems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.12});
revealElems.forEach(el => io.observe(el));

// Chat toggle
const chatBtn = document.getElementById('chat');
const chatBox = document.getElementById('chatBox');
if(chatBtn && chatBox){
  chatBtn.addEventListener('click',()=>{
    chatBox.classList.toggle('open');
  });
}

// Animated logo subtle loop
const logo = document.getElementById('logo');
if(logo){
  let t=0;setInterval(()=>{
    t=(t+1)%360;logo.style.transform=`rotateY(${Math.sin(t/20)*6}deg)`;},3000);
}

// Cursor dot effect
const dot = document.createElement('div');dot.className='cursor-dot';document.body.appendChild(dot);
window.addEventListener('mousemove', e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'});

// Down arrow click scroll
const down = document.querySelector('.down-arrow');
if(down){down.addEventListener('click',()=>{document.querySelector('#portfolio').scrollIntoView({behavior:'smooth'});});}

// Mobile: collapse nav into simple toggler (basic)
