document.getElementById('scroll').innerHTML = `<button id="btnScrollToTop" class="btn btn-primary rounded-circle" title="Volver arriba">
<i class="bi bi-arrow-up-short"></i>
</button>`


// Obtén una referencia al botón de scroll hacia arriba
const btnScrollToTop = document.querySelector('#btnScrollToTop');

// Agrega un evento de clic al botón
btnScrollToTop.addEventListener('click', () => {
  // Desplázate hacia arriba suavemente usando smooth scroll
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Muestra u oculta el botón dependiendo de la posición de desplazamiento de la página
window.addEventListener('scroll', () => {
  if (window.scrollY > document.documentElement.clientHeight) {
    btnScrollToTop.classList.add('show');
  } else {
    btnScrollToTop.classList.remove('show');
  }
});