<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Menú Diner Interactivo</title>
</head>
<body>
  <script>
    const comentarios = [
      "¡Excelente elección!",
      "Ese plato es uno de los favoritos de la casa.",
      "¡Buena elección, lo preparo con cariño!",
      "¡Vas a disfrutarlo mucho!",
      "¡Eso suena delicioso!"
    ];

    const menu = {
      desayuno: {
        principales: {
          "huevos rancheros": 5.99,
          "panqueques": 4.99,
          "tostadas francesas": 4.49
        },
        acompanamientos: {
          "tocino": 1.99,
          "fruta fresca": 2.49,
          "yogur": 1.75
        }
      },
      almuerzo: {
        principales: {
          "hamburguesa": 8.99,
          "ensalada césar": 7.49,
          "sándwich de pollo": 8.49
        },
        acompanamientos: {
          "papas fritas": 2.49,
          "ensalada pequeña": 2.99,
          "sopa del día": 3.25
        }
      },
      cena: {
        principales: {
          "hamburguesa": 10.99,
          "ensalada césar": 9.49,
          "sándwich de pollo": 10.49
        },
        acompanamientos: {
          "papas fritas": 2.99,
          "ensalada pequeña": 3.49,
          "sopa del día": 3.75
        }
      }
    };

    function normalizar(str) {
      return str.trim().toLowerCase();
    }

    function obtenerComentario() {
      return comentarios[Math.floor(Math.random() * comentarios.length)];
    }

    function mostrarMenu(tipo) {
      let salida = ` MENÚ DE ${tipo.toUpperCase()}\n\n🍽️ Principales:\n`;
      for (let plato in menu[tipo].principales) {
        salida += `- ${plato} ($${menu[tipo].principales[plato].toFixed(2)})\n`;
      }
      salida += "\n Acompañamientos:\n";
      for (let acomp in menu[tipo].acompanamientos) {
        salida += `- ${acomp} ($${menu[tipo].acompanamientos[acomp].toFixed(2)})\n`;
      }
      alert(salida);
    }

    function seleccionarElemento(categoria, mensaje) {
      while (true) {
        let input = prompt(mensaje);
        if (!input) return null;
        let seleccion = normalizar(input);
        if (categoria[seleccion] !== undefined) {
          return { nombre: seleccion, precio: categoria[seleccion] };
        }
        alert(" Opción no válida. Intenta de nuevo.");
      }
    }

    function personalizar(nombre) {
      const extra = prompt(`¿Deseas personalizar "${nombre}"? Escribe tu personalización (o deja vacío para omitir):`);
      if (extra && extra.trim() !== "") {
        alert(` Notado: "${nombre}" se preparará "${extra}" (+$0.50)`);
        return 0.50;
      }
      return 0;
    }

    while (true) {
      let tipo = normalizar(prompt("Bienvenido al Diner 🍽️\n¿Desayuno, almuerzo o cena? (o escribe 'salir')"));

      if (tipo === "salir" || tipo === null) {
        alert("👋 Gracias por visitarnos. ¡Hasta luego!");
        break;
      }

      if (!menu[tipo]) {
        alert(" Tipo de comida no válido. Intenta con desayuno, almuerzo o cena.");
        continue;
      }

      mostrarMenu(tipo);

      // Plato principal
      const principal = seleccionarElemento(menu[tipo].principales, "👉 Escribe el nombre del plato principal:");
      if (!principal) break;
      const extraP = personalizar(principal.nombre);
      alert(`💬 Camarera: ${obtenerComentario()}\n💰 Precio: $${(principal.precio + extraP).toFixed(2)}`);

      // Acompañamientos
      let totalAcomp = 0;
      for (let i = 1; i <= 2; i++) {
        const acomp = seleccionarElemento(menu[tipo].acompanamientos, ` Elige acompañamiento ${i}:`);
        if (!acomp) break;
        const extraA = personalizar(acomp.nombre);
        alert(`💬 Camarera: ${obtenerComentario()}\n💰 Precio: $${(acomp.precio + extraA).toFixed(2)}`);
        totalAcomp += acomp.precio + extraA;
      }

      const total = principal.precio + extraP + totalAcomp;
      alert(`🧾 TOTAL DE TU PEDIDO: $${total.toFixed(2)}`);
    }
  </script>
</body>
</html>
  
