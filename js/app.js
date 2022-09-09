alert("¡Gracias por visitar nuestra página de alquiler de vehículos!");

function bienvenida() {
  let nombre = prompt("Ingresá tu nombre");
  let apellido = prompt("ingresá tu apellido");
  alert(`Bienvenido ${nombre} ${apellido}`);
  console.log(`Bienvenido ${nombre} ${apellido}`);
}
bienvenida();

let eleccion = prompt(
  "Ingresa una opcion numérica, ¿Qué vehículo te interesa alquilar? \n \n1 : Ford Ranger , $15000 \n 2 : Toyota Etios , $9000 \n 3: Jeep Rubicon , $17000 \n 4: VW Passat , $11000 \n 5: Fiat Cronos , $7000 \n 6: No me decido, vuelvo mas tarde."
);

while (eleccion !== 6) {
  if (eleccion === "1") {
    alert(`Elegiste Ford Ranger por $15000 pesos argentinos por día`);
  } else if (eleccion === "2") {
    alert(`Elegiste Toyota Etios por $9000 pesos argentinos por día`);
  } else if (eleccion === "3") {
    alert(`Elegiste Jeep Rubicon por $17000 pesos argentinos por día`);
  } else if (eleccion === "4") {
    alert(`Elegiste VW Passat por $11000 pesos argentinos por día`);
  } else if (eleccion === "5") {
    alert(`Elegiste Fiat Cronos por $7000 pesos argentinos por día`);
  }
  break;
}
alert(
  "A continuación, informanos quienes van a ser los pasajeros del vehículo (ten en cuenta que no se permiten mas de 5)."
);
alert("Escribe la palabra ok cuando termines.");

let entrada = prompt("Ingresar pasajero");
const pasajeros = [];
while (entrada != "ok") {
  pasajeros.push(entrada);
  entrada = prompt("ingresar pasajero");
}

for (let index = 0; index < pasajeros.length; index++) {
  alert(" Va a viajar: " + pasajeros[index]);
}

alert("¡Gracias por elgirnos! ¡Hasta la próxima!");
