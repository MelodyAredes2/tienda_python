const footer = document.querySelector('footer');
footer.classList.add('footer', 'bg-dark', 'text-light', 'pt-4');
footer.innerHTML = `<div class="container">
<div class="row">
  <div class="col-md-6">
    <h5>Información de contacto</h5>
    <p>Correo electrónico: info@example.com</p>
    <p>Teléfono: 123-456-7890</p>
  </div>
  <div class="col-md-6">
    <h5>Enlaces útiles</h5>
    <ul class="list-unstyled">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca de nosotros</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </div>
</div>
<hr>
<p class="text-center">&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
</div>
<div id="scroll" class="text-end pe-4 pb-4"></div>
`