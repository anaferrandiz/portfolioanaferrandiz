'use strict'

// ************* TABS IDIOMAS

const tabsBtns = document.querySelectorAll('.tabs__proyectos__btn')
const tabsPs = document.querySelectorAll('.tabs__proyectos__p')

tabsBtns.forEach(function (eachBtn, index) {
    tabsBtns[index].addEventListener('click', function () {
        tabsPs.forEach(function (eachP, index) {
            tabsPs[index].classList.remove('isActive')
            tabsBtns[index].classList.remove('isActive')
        })

        tabsPs[index].classList.add('isActive')
        tabsBtns[index].classList.add('isActive')

    })
})

// ************* FIN TABS IDIOMAS


// ************* CARRUSEL DESASTRE

let positione = 0

let siguientearrow = document.querySelector('.siguientearroww')
let anteriorarrow = document.querySelector('.anteriorarroww')
const carrouselBtnsAgua = document.querySelectorAll('.carrusel__desastres__btn')
let carrouselContainerAgua = document.querySelector('.wrapper__carrusel__desastres')

const desplazarContainer = function() {
    carrouselContainerAgua.style.transform = `translateX(-${positione * (100 / 11)}%)`;
    actualizarBotones();
}

const actualizarBotones = function() {
    carrouselBtnsAgua.forEach(function(btn, index) {
        btn.classList.toggle('isActive', index === positione);
    });
}

siguientearrow.addEventListener('click', function (){
    positione++
    if (positione >= 11) {
        positione = 0
    }
    desplazarContainer()
})

anteriorarrow.addEventListener('click', function () {
    positione--
    if (positione < 0) {
        positione = 10
    }

    desplazarContainer()
})


carrouselBtnsAgua.forEach(function (each, i) {
    carrouselBtnsAgua[i].addEventListener('click', function () {
        positione = i
        console.log(positione)
        desplazarContainer()
    })
})


setInterval(function(){
    positione++
    if(positione >=10){
        positione = 0
    }
    desplazarContainer()
} , 3000)
// Que se ejecute cada 3000 milisegundos 

// Para hacer click en imagen y que cambie
// Zonas clicables sobre la imagen

const totalSlides = 11;

document.querySelector('.carrusel__clickzone__black.left').addEventListener('click', function () {
    positione--;
    if (positione < 0) positione = totalSlides - 1;
    desplazarContainer();
});

document.querySelector('.carrusel__clickzone__black.right').addEventListener('click', function () {
    positione++;
    if (positione >= totalSlides) positione = 0;
    desplazarContainer();
});



actualizarBotones();
// ************* FIN CARRUSEL DESASTRE





