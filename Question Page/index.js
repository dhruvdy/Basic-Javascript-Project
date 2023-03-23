let i = document.querySelectorAll('i');
let ques = document.querySelectorAll('.ques');
for(let j=0;j<i.length;++j){
    i[j].addEventListener('click',function(e){
        ques[parseInt(e.target.getAttribute('answer'))-1].classList.toggle('expand');
        e.target.classList.toggle('fa-square-plus');
        e.target.classList.toggle('fa-square-minus');

    })
}