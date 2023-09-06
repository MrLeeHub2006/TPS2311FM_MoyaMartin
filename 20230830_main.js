


const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('.parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');
console.log(input.value);
console.log({h1,p,parrafito,pid,input,});


h1.innerHTML= 'patito <br> feo'
h1.innerText= 'patito <br> feo'
// console.log (h1.getAttribute('class'));
// h1.setAttribute ('class','roja');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value='456'

const img =document.createElement('img');
img.setAttribute('src','https://th.bing.com/th/id/OIP.TtuHBTYgrAAnVyWAFukCegHaEK?w=323&h=181&c=7&r=0&o=5&pid=1.7');
console.log(img);

pid.appendChild(img);
