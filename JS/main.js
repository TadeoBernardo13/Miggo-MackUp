const menuStrip = document.querySelector('.menu-panel');
const menuStripCont = document.querySelector('.menu-container');

document.querySelector('.barra-desplegar').onclick = function(){
    menuStrip.classList.toggle('active');
    menuStripCont.classList.toggle('active');
}