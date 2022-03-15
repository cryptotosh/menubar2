//SELECT ELEMENETS FROM DOM
const pass = document.querySelector('#password');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', ()=>{
   const showPass = pass.getAttribute('type')=== 'text';
    pass.setAttribute('type', showPass ? 'password' : 'text');
    toggle.classList.toggle('fa-eye-slash');
});


const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('.closemenu');
const navUL = document.querySelector('.ul-list');

//Toggle Hamburger Menu
hamburger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
});

//Hide Hamburger Menu
closeMenu.addEventListener('click', ()=>{
     navUL.classList.toggle('hide');
})






/*const ulList = document.querySelector('.ulList'),
closeMenu = document.querySelector('.closemenu'),
hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    ulList.style.display = 'flex';
    ulList.style.top = '0';
}
function close(){
    ulList.style.top='-100%';
}*/