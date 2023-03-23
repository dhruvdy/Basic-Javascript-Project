let sideBtn = document.getElementById('side-bar');
let slidingbar = document.getElementsByClassName('sideBar')[0];
let cross = document.getElementsByClassName('cross')[0];
console.log(sideBtn,slidingbar)
sideBtn.addEventListener('click',function(){
    slidingbar.classList.toggle('move-right');
})

cross.addEventListener('click',function(){
    slidingbar.classList.toggle('move-right');
})