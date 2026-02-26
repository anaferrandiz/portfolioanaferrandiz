'use strict'

// ************* MENÚ RESPONSIVE
const headerBtn = document.querySelector('.header__btn')
const headerNav = document.querySelector('.header__nav')

headerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('isActive')
   })
// ************* FIN MENÚ RESPONSIVE




// ************* TABS IDIOMAS

// Seleccionamos cada bloque de tabs por separado
document.querySelectorAll('.tabs__proyectos').forEach(function (bloque) {
    const btns = bloque.querySelectorAll('.tabs__proyectos__btn')
    const ps = bloque.querySelectorAll('.tabs__proyectos__p')

    btns.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            // Limpiamos isActive solo dentro de este bloque
            btns.forEach(b => b.classList.remove('isActive'))
            ps.forEach(p => p.classList.remove('isActive'))

            // Activamos el correspondiente
            btn.classList.add('isActive')
            ps[index].classList.add('isActive')
        })
    })
})

// ************* FIN TABS IDIOMAS




// ************* CARRUSEL ESCLATA-SANG

let positione = 0

let siguientearrow = document.querySelector('.siguientearroww')
let anteriorarrow = document.querySelector('.anteriorarroww')
const carrouselBtns = document.querySelectorAll('.carrusel__esclata__btn')
let carrouselContainer = document.querySelector('.wrapper__carrusel__esclata')

const desplazarContainer = function() {
    carrouselContainer.style.transform = `translateX(-${positione * (100 / 6)}%)`;
    actualizarBotones();
}

const actualizarBotones = function() {
    carrouselBtns.forEach(function(btn, index) {
        btn.classList.toggle('isActive', index === positione);
    });
}

siguientearrow.addEventListener('click', function (){
    positione++
    if (positione >= 6) {
        positione = 0
    }
    desplazarContainer()
})

anteriorarrow.addEventListener('click', function () {
    positione--
    if (positione < 0) {
        positione = 2
    }

    desplazarContainer()
})


carrouselBtns.forEach(function (each, i) {
    carrouselBtns[i].addEventListener('click', function () {
        positione = i
        console.log(positione)
        desplazarContainer()
    })
})


setInterval(function(){
    positione++
    if(positione >=6){
        positione = 0
    }
    desplazarContainer()
} , 3000)
// Que se ejecute cada 3000 milisegundos 


actualizarBotones();
// ************* FIN CARRUSEL ESCLATA-SANG





