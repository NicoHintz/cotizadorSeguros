
const marcasJSON = `
[
  {
    "nombre": "Citroen",
    "precio": 10000
  },
  {
    "nombre": "Fiat",
    "precio": 15000
  }
]
`;

const marcas = JSON.parse(marcasJSON) || [];

const actualizarHistorial = (nuevoHistorial) => {
if (!nuevoHistorial || nuevoHistorial.length === 0) return;

const historialUI = document.querySelector("#historial");

historialUI.innerHTML = nuevoHistorial.map(cotizacion => (
    `<li>
      <div>Marca: ${cotizacion.marca}, Año: ${cotizacion.anio}, Tipo: ${cotizacion.tipoSeguro}, Precio: $${cotizacion.precio}</div>
    </li>`
  )
  );
};

// Funcion autoejecutable
(function () {
const historialStr = localStorage.getItem('historial') || "[]";
const historial = JSON.parse(historialStr);

actualizarHistorial(historial);
})();

const guardarCotizacion = (marca, anio, tipoSeguro, precio) => {
const historialStr = localStorage.getItem('historial');
const cotizacion = {
  marca,
  anio,
  tipoSeguro,
  precio
}
let historial = JSON.parse(historialStr);

if (!historialStr) {
  window.localStorage.setItem('historial', JSON.stringify([cotizacion]));
} else {
  historial.push(cotizacion);
  if (historial.length > 5) historial.shift();
  localStorage.setItem('historial', JSON.stringify(historial));
}

actualizarHistorial(historial);
};

const calcularPrecio = (marca, anio, tipoSeguro) => {
// Acá primero busco en el array de marcas si hay alguno con el mismo
// nombre que seleccionó el usuario y le saco el precio.
// En caso de no encontrarlo, le pone 20000 de precio 
let precio = marcas.find(({ nombre }) => nombre.toLowerCase() === marca.toLowerCase())?.precio || 20000;

if (anio > 2008) precio *= 1.2;
if (tipoSeguro === 'completo') precio *= 1.5;

return precio;
};

const cotizarSeguro = () => {
const marca = document.querySelector('#marca').value;
const anio = document.querySelector('#anio').value;
const tipoSeguro = document.querySelector('[name="tipoSeguro"]:checked').value;
const resultado = document.querySelector('#resultado');

if (!marca || !anio || !tipoSeguro) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Debes completar todos los campos!',
    footer: '<a href="">Why do I have this issue?</a>'
  });
  return;
};

const precio = calcularPrecio(marca, anio, tipoSeguro);

guardarCotizacion(marca, anio, tipoSeguro, precio);
resultado.innerHTML = `<h2>El precio es: $${precio}</h2>`;
}