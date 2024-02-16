let featuresContainer=document.querySelector('.features__container');
let features=document.querySelector('#features');
let imgarrow1=document.querySelector('#arrow1');



document.querySelector('#features').onclick=()=>{
    featuresContainer.classList.toggle('active');
    company.classList.toggle('pad__top');
    imgarrow1.classList.toggle('rotate');
}

let company=document.querySelector('#company');
let companyContainer=document.querySelector('.company__container');
let carrers=document.querySelector('#carrers');
let imgarrow2=document.querySelector('#arrow2');


document.querySelector('#company').onclick=()=>{
    companyContainer.classList.toggle('active');
    carrers.classList.toggle('pad__top');
    imgarrow2.classList.toggle('rotate');
    
}

const menu = document.querySelector('#mobile__menu');
const menuLinks= document.querySelector('.navbar__menu');
let container=document.querySelector('.container');
let img=document.querySelector('.img__container');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    container.classList.toggle('color__fade');
})
