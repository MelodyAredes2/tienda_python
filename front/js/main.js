
document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-white">
<div class="container">
<a class="navbar-brand" href="index.html"><img src="https://www.coolmod.com/images/logos/logo_coolmod.png" alt="COOLMOD" width="160" heigh="80"></a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link active" href="index.html" aria-current="page">Inicio <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="productos.html">Productos</a>
        <a class="dropdown-item" href="#">#</a>
      </div>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0">
    <input class="form-control me-sm-2" id='Search' type="text" placeholder="Buscar">
    <button class="btn btn-outline-success bg-succes my-2 my-sm-0" id='ButtonSearch' type="submit">Search</button>
  </form>
</div>
</div>
</nav>`

document.querySelector('body').classList.add('bg-info')


const url = 'http://127.0.0.1:5000/productos';
let products = [];
let id = '';
let found = false;
let i = 0;

async function SearchProduct() {
  let searchInput = document.getElementById('Search');
  let searchValue = searchInput.value;

  await fetchApi(url);
  for (const p of products) {
    console.log('nombres');
    console.log(p.nombre);
    if (p.nombre.toLowerCase() === searchValue.toLowerCase()) {
      id = p.id;
      found = true;
      break; // Sale del bucle cuando se encuentra una coincidencia
    }
  }
  if (found) {
    window.location.href = "producto.html?id=" + id;
  } else {
    console.log(searchValue)
    console.log("Producto no encontrado");
  }
}

async function fetchApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    products = data;
    console.log(products); // Verifica si los datos se están asignando correctamente
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

let button = document.getElementById('ButtonSearch');
button.addEventListener('click', SearchProduct);

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});
