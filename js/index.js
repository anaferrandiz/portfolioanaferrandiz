'use strict'

// ************* MENÚ RESPONSIVE
const headerBtn = document.querySelector('.header__btn')
const headerNav = document.querySelector('.header__nav')

headerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('isActive')
   })
// ************* FIN MENÚ RESPONSIVE




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




// ************* CARRUSEL ESCLATA-SANG

let positione = 0

let siguientearrow = document.querySelector('.siguientearroww')
let anteriorarrow = document.querySelector('.anteriorarroww')
const carrouselBtns = document.querySelectorAll('.carrusel__esclata__btn')
let carrouselContainer = document.querySelector('.wrapper__carrusel__esclata')

const desplazarContainer = function() {
    carrouselContainer.style.transform = `translateX(-${positione * (100 / 6)}%)`
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
        posicione = 2
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

// ************* FIN CARRUSEL ESCLATA-SANG





