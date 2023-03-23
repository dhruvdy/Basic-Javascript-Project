let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
let val = document.querySelectorAll('.counter>span')[0];
decrease.addEventListener('click',function(){
    val.innerText =parseInt(val.innerText) -1;
    if(parseInt(val.innerText) < 0 ) val.style.color = 'red';

})

reset.addEventListener('click',function(){
    val.innerText = 0;
   val.style.color = 'black';   
})

increase.addEventListener('click',function(){
    val.innerText =parseInt(val.innerText) +1;
    if(parseInt(val.innerText) > 0 ) val.style.color = 'green';
})