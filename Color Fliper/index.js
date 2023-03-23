let root = document.getElementById('root');
root.style.backgroundColor = 'rgb('+Math.random()*(255)+','+Math.random()*(255)+','+Math.random()*(255)+')';
let btn = document.querySelectorAll('#root>button')[0];
btn.addEventListener('click',function(){
    console.log('uts')
    let a = Math.random()*(255);
    let b = Math.random()*(255);
    let c = Math.random()*(255);
    root.style.backgroundColor = 'rgb('+a+','+b+','+c+')';
})