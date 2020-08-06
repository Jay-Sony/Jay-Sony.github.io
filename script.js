let button1 =document.querySelector("#home");
let button2 =document.querySelector("#contact");
let button3 =document.querySelector("#about");
let button4 =document.querySelector("#projects");
let project_container=document.querySelector("#project_container");
let home_container=document.querySelector("#home_container");
let about_container=document.querySelector("#about_container");
let contact_container=document.querySelector("#contact_container");
function onClick1(){
    home_container.style["display"]='block';
    contact_container.style["display"]='none';
    about_container.style["display"]='none';
    project_container.style["display"]='none';
}
    

function onClick2(){
    home_container.style["display"]='none';
    contact_container.style["display"]='block';
    about_container.style["display"]='none';
    project_container.style["display"]='none';
}

function onClick3(){
    home_container.style["display"]='none';
    contact_container.style["display"]='none';
    about_container.style["display"]='block';
    project_container.style["display"]='none';
}
function onClick4(){
    home_container.style["display"]='none';
    contact_container.style["display"]='none';
    about_container.style["display"]='none';
    project_container.style["display"]='block';
}


button1.addEventListener('click',onClick1);
button2.addEventListener('click',onClick2);
button3.addEventListener('click',onClick3);
button4.addEventListener('click',onClick4);