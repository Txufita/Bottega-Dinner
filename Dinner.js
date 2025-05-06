const menu = {
    principales: {
      "huevos rancheros": 5.99,
      tortitas: 4.99,
      "tostadas francesas": 4.49,
      hamburguesa: 8.99,
      ensalada: 7.49,
      sándwich: 8.49
    },
    acompanamientos: {
      tocino: 1.99,
      "fruta fresca": 2.49,
      yogur: 1.75,
      "patatas fritas": 2.49,
      "ensalada pequeña": 2.99,
      "sopa del día": 3.25
    }
  };
  
    const comentarios = [
    "¡Una excelente elección!",
    "Este plato es muy popular entre nuestros clientes.",
    "¡Perfecto para un día lleno de energía!",
    "Un clásico que nunca falla, ¡buen apetito!",
    "¡Delicioso, te va a encantar!"
  ];
  
   function mostrarMenu() {
    console.log("------ MENÚ ------");
    console.log("\nPlatos principales:");
    for (let plato in menu.principales) {
      console.log(`${plato} - $${menu.principales[plato].toFixed(2)}`);
    }
  
    console.log("\nAcompañamientos:");
    for (let acomp in menu.acompanamientos) {
      console.log(`${acomp} - $${menu.acompanamientos[acomp].toFixed(2)}`);
    }
    console.log("\n");
  }
  
   function seleccionarPlato(opciones, tipo) {
    let seleccion = "";
    while (true) {
      seleccion = prompt(
        `Por favor, elige un ${tipo} de la siguiente lista: \n${Object.keys(
          opciones
        ).join(", ")}`
      ).toLowerCase();
  
            if (
        Object.keys(opciones).some((opcion) => opcion.toLowerCase() === seleccion)
      ) {
        return seleccion;
      } else {
        console.log("Opción no válida, por favor elige un plato de la lista.");
      }
    }
  }
  
    function generarComentario() {
    return comentarios[Math.floor(Math.random() * comentarios.length)];
  }
  
    function calcularTotal(platoPrincipal, guarniciones) {
    let precioPrincipal = menu.principales[platoPrincipal];
    let totalGuarniciones = guarniciones.reduce(
      (total, guarnicion) => total + menu.acompanamientos[guarnicion],
      0
    );
    return precioPrincipal + totalGuarniciones;
  }
  
    function tomarPedido() {
    let seguir = true;
    while (seguir) {
     
      mostrarMenu();
  
      
      let platoPrincipal = seleccionarPlato(menu.principales, "plato principal");
  
      
      console.log(`Camarero/a: ${generarComentario()}`);
      console.log(
        `El precio de ${platoPrincipal} es: $${menu.principales[
          platoPrincipal
        ].toFixed(2)}\n`
      );
  
     
      let guarniciones = [];
      for (let i = 0; i < 2; i++) {
        let guarnicion = seleccionarPlato(
          menu.acompanamientos,
          `guarnición ${i + 1}`
        );
        guarniciones.push(guarnicion);
       
        console.log(`Camarero/a: ${generarComentario()}`);
        console.log(
          `El precio de ${guarnicion} es: $${menu.acompanamientos[
            guarnicion
          ].toFixed(2)}\n`
        );
      }
  
          let total = calcularTotal(platoPrincipal, guarniciones);
      console.log(`\nTotal del pedido: $${total.toFixed(2)}\n`);
  
           let respuesta = prompt("¿Deseas hacer otro pedido? (sí/no)").toLowerCase();
      if (respuesta !== "sí") {
        seguir = false;
        console.log("¡Gracias por tu visita! ¡Vuelve pronto!");
      }
    }
  }
  
  tomarPedido();
  
