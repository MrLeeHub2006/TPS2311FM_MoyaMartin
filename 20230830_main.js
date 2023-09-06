const h1=document.querySelector('h1');
const formulario= document.querySelector('#tablita')
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const presult = document.querySelector('#result')

formulario.addEventListener('submit', sumarinputvalues);


function sumarinputvalues(event) {
 console.log({event});
 event.preventDefault()
 const sumainputs = input1.value + input2.value;
 presult.innerText = "resultado: " +sumainputs;

}