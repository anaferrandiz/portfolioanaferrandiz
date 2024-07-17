// ************* CONTENIDO FLORS

const selecText = document.querySelectorAll('.wrap__cadaflor')
// seleccionamos texto
const imagenes = document.querySelectorAll('.imgs__flors')
// seleccionamos imágenes

let posicion = 0

let mostrarImagen = function () {
    imagenes.forEach(function (each, i) {
        imagenes[i].classList.remove('isVisible')
        selecText[i].classList.remove('isActive')
    })
    imagenes[posicion].classList.add('isVisible')
    selecText[posicion].classList.add('isActive')
}

selecText.forEach(function (each, i) {
    selecText[i].addEventListener('mouseenter', function () {
        posicion = i

        mostrarImagen()
    })
    selecText[i].addEventListener('mouseleave', function () {
        imagenes[i].classList.remove('isVisible')
        selecText[i].classList.remove('isActive')

    })


})

// ************* CONTENIDO FLORS


// ************* MENÚ RESPONSIVE
const headerBtn = document.querySelector('.header__btn')
const headerNav = document.querySelector('.header__nav')

headerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('isActive')
   })
// ************* FIN MENÚ RESPONSIVE
