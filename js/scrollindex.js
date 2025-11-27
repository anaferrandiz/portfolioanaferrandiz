'use strict'

const scrollElements = document.querySelectorAll('.wrapper__hov');

// Distancias desde la parte superior en la que quiero activar el efecto (en píxeles)
const activationPoints = [10, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 140, 400]; // Distancia diferente para la primera caja

// Función para comprobar si el elemento ha llegado a la distancia especificada
function checkScroll() {
  scrollElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;

    // Usar un punto de activación diferente para la primera caja
    if (elementTop < activationPoints[index]) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Agregar el evento de scroll
window.addEventListener('scroll', checkScroll);

// Comprobar la posición al cargar la página
checkScroll();
