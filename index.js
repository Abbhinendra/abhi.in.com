let bars = document.querySelector('.bars');
let ul = document.querySelector('ul');

bars.addEventListener('click', function () {
    ul.classList.toggle('add');

    let ham = bars.firstElementChild;
    if (ul.classList.contains('add')) {
        ham.classList.replace('fa-bars', 'fa-xmark');
    }
    else {
        ham.classList.replace('fa-xmark', 'fa-bars');
    }
})

let second = document.querySelector('.second');
let search = document.getElementById('search');
let cross = document.getElementById('cross');
search.addEventListener('click', function () {
    second.classList.toggle('add6');
})

cross.addEventListener('click', function () {

    second.style.display = "none";
    cross.style.border = "2px solid #042842"
})

let about = document.getElementById('about');
about.addEventListener('click', () => {


    $('#Modal').modal('toggle');

});
let form = document.getElementById('form-btn');
let exampleInputEmail1 = document.getElementById('exampleInputEmail1');
let error = document.getElementById('error');

form.addEventListener('click', (e) => {
    e.preventDefault();
    if (exampleInputEmail1.value <= 0) {
        error.innerHTML = "Sorry your input box is empty.";
    }
    else {
        window.location = "about.html";
        error.innerHTML = "";
    }
})

let l = document.getElementById('location');

l.addEventListener('click', () => {

    window.location = "search.html";

})

let closebtn=document.querySelector('.closebtn');
let seven=document.querySelector('.seven');

closebtn.addEventListener('click',function(){

    seven.classList.toggle('more');
    
    let showArrow=closebtn.firstElementChild;
    if(seven.classList.contains('more')){
        showArrow.classList.replace('fa-arrow-right','fa-arrow-down');
        
    }
    else{
        showArrow.classList.replace('fa-arrow-down','fa-arrow-right');
       
    }

})
