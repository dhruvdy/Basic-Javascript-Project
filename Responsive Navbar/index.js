let linkbtn = document.getElementById('link-btn');
let links = document.getElementsByClassName('links')[0];
linkbtn.addEventListener('click',function(){
    links.classList.toggle('increaseHeight');
})