const cotizarSeguro = () => {

  let marca = document.querySelector("#marca").value;
  let anio = document.querySelector("#anio").value;
  let tipoSeguro = Array.from(document.getElementsByName("tipo")).find(r => r.checked).value;
  let divResultado = document.querySelector("#resultado");

  if (marca === "" || anio === "" || tipoSeguro === "") {
    return alert("Falta ingresar algun dato")
  }
  if (tipoSeguro === "basico") {
    const suma = (a, b, c, d) => a + b + c
    const multiplicacion = (suma, c) => suma * c
    const iva = x => x * 0.22
    let precioProducto = 10000
    let yearProducto = 0.025 * precioProducto
    let nuevoPrecio = suma(precioProducto, iva(precioProducto), yearProducto)
    console.log(nuevoPrecio)

    divResultado.innerHTML = `<h2>El precio de tu seguro es $${nuevoPrecio} </h2>`
  }
  if (tipoSeguro === "completo") {
    const suma = (a, b, c, d) => a + b + c 
    const multiplicacion = (suma, c) => suma * c
    const iva = x => x * 0.22
    let precioProducto = 10000
    let yearProducto = 0.025 * precioProducto
    let nuevoPrecio = suma(precioProducto, iva(precioProducto), yearProducto) * 2
    console.log(nuevoPrecio)
    divResultado.innerHTML = `<h2>El precio de tu seguro es $${nuevoPrecio} </h2>`
  }
};



// const cotizarSeguro = () => {

//   let marca = document.querySelector("#marca").value;
//   let anio = document.querySelector("#anio").value;
//   let basico = document.querySelector("#basico");
//   let completo = document.querySelector("#completo");
//   let divResultado = document.querySelector("#resultado");
//   let tipoSeguro = "";

//   if (basico.checked) {
//     plan = "basico"
//   } else if (completo.checked) {

//     plan = "completo"
//   }

//   if (marca === "" || anio === "" || tipoSeguro === "") {
//     alert("Falta ingresar algun dato")
//     return
//   }

// }

// function cotizarSeguro(){



//   alert("El precio de tu seguro es " + nuevoPrecio + " IVA incluido")
// }

// Creo un array para ir agregando marcas que solicite el usuario al listado //

// let nuevasMarcas = ["Citroen", "Peugeot", "Fiat"]

// nuevasMarcas.push(promt("Que marca desea cotizar"))
// console.log(nuevasMarcas)

