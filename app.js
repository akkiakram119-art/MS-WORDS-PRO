let size = document .getElementById('size');
let left = document .getElementById('left');
let right = document .getElementById('right');
let center= document .getElementById('center');
let justify = document .getElementById('justify');
let bold = document .getElementById('bold');
let underline = document .getElementById('underline');
let clear = document .getElementById('clear');
let bg = document .getElementById('bg');
let italic = document .getElementById('italic');
let font = document .getElementById('font');
let para = document .getElementById('para');
let color =document.getElementById('color')

left.addEventListener('click' , ()=>{
  para.style.textAlign = 'left';
})

right.addEventListener('click' , ()=>{
  para.style.textAlign = 'right';
})
center.addEventListener('click' , ()=>{
  para.style.textAlign = 'center';
})
justify.addEventListener('click' , ()=>{
  para.style.textAlign = 'justify';
})
bold.addEventListener('click' , ()=>{
  para.style.fontWeight = 'bold';
})
font.addEventListener('click' , ()=>{
  para.style.fontFamily = font.value;
})
bg.addEventListener('click' , ()=>{
  para.style.background = bg.value;
})
size.addEventListener('click' , ()=>{
  para.style.fontSize =  size.value + "px";
})
italic.addEventListener('click' , ()=>{
  para.style.fontStyle = 'italic';
})
underline.addEventListener('click' , ()=>{
  para.style.textDecoration = 'underline';
})
clear.addEventListener('click' , ()=>{
  para.style = 'none';
})
color.addEventListener('click' , ()=>{
  para.style.color = color.value;
})

 





