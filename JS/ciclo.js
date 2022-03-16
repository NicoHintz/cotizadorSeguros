const cotizarSeguro = () => {

  let marca = document.querySelector("#marca").value;
  let anio = document.querySelector("#anio").value;
  let basico = document.querySelector("#basico");
  let completo = document.querySelector("#completo");

  let divResultado = document.querySelector("#resultado");

  let tipoSeguro = "";

  if (basico.checked) {
    plan = "basico"
  } else if (completo.checked) {

    plan = "completo"
  }

  if (marca === "" || anio === "" || tipoSeguro === "") {
    alert("Falta ingresar algun dato")
    return
  }

  
}

function cotizarSeguro(){

  
    
  alert("El precio de tu seguro es " + nuevoPrecio + " IVA incluido")
}

// Creo un array para ir agregando marcas que solicite el usuario al listado //

let nuevasMarcas = ["Citroen","Peugeot","Fiat"]

nuevasMarcas.push(promt("Que marca desea cotizar"))
console.log(nuevasMarcas)

