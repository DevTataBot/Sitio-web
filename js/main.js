let ubicacionPrincipal = window.pageYOffset;
window.addEventListener('scroll', function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top= "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top= "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;

});
let enlacesMenu = document.querySelectorAll('.enlaces-header')[0];
let semaforo = true;
document.querySelectorAll('.hamburger')[0].addEventListener('click', function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesMenu.classList.toggle('menucircle');
    
});