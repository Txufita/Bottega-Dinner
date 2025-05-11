function validacion_hora() {
    function validarHora(hora) {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora);
    }

    let tu_hora = prompt("Por favor, ingresa la hora actual (HH:MM).");

    if (tu_hora && validarHora(tu_hora)) {
        
        if (tu_hora >= '08:00' && tu_hora <= '11:00') {
            primer_platos = {
                "Avena con frutas": "7",
                "Huevos revueltos": "5",
                "Tostada de aguacate y salmón": "8",
                "Yogur griego con granola y frutas": "4",
                "Wraps de huevo y vegetales": "5",
                "Tortitas con sirope": "3",
            };
            segundo_platos = {
                "Fruta extra": "2",
                "Huevo extra": "2",
                "Aguacate extra": "4",
                "Salmon": "6",
            };
            bebidas_menu = {
                "Café con leche": "1.1",
                "Leche": "1.5",
                "Espresso": "1.0",
                "Batido": "3",
            };
            alert("Bienvenido a nuestro restaurante. Es hora del desayuno, permíteme mostrarte el menú.");
            orden();
        } else if (tu_hora >= '13:00' && tu_hora <= '16:00') {
            primer_platos = {
                "Risotto": "22",
                "Ensalada de aguacate": "13",
                "Pollo a la parrilla": "9",
                "Lasaña": "18",
                "Lubina a la parrilla": "22",
            };
            segundo_platos = {
                "Espaguetis carbonara": "7",
                "Ensalada con pollo": "8",
                "Pizza margarita": "12",
                "Solomillo a la parrilla": "15",
                "Vegetales": "9",
            };
            bebidas_menu = {
                "Cola": "1.5",
                "Fanta": "1.5",
                "Nestea": "1.0",
                "Agua": "1",
                "Cerveza": "3",
            };
            alert("Bienvenido a nuestro restaurante. Es hora del almuerzo, permíteme mostrarte el menú.");
            orden();
        } else if (tu_hora >= '20:00' && tu_hora <= '23:00') {
            primer_platos = {
                "Risotto": "25",
                "Ensalada de aguacate": "15",
                "Pollo a la parrilla": "11",
                "Lasaña": "21",
                "Lubina a la parrilla": "24",
            };
            segundo_platos = {
                "Espaguetis carbonara": "9",
                "Ensalada con pollo": "10",
                "Pizza margarita": "13",
                "Solomillo a la parrilla": "19",
                "Vegetales": "11",
            };
            bebidas_menu = {
                "Cola": "1.6",
                "Fanta": "1.6",
                "Nestea": "1.2",
                "Agua": "1.5",
                "Cerveza": "3.6",
            };
            alert("Bienvenido a nuestro restaurante. Es hora de la cena, permíteme mostrarte el menú.");
            orden();
        } else {
            alert("La cocina está cerrada.");
        }
    } else {
        alert("Por favor, ingresa una hora válida en formato HH:MM.");
        validacion_hora();
    }
}

validacion_hora();

function orden() {
    function tomar_pedido() {

        var bebida_elegida;
        var plato_principal_elegido;
        var plato_secundario_elegido;
        var precio_total = 0;
        var precio_primer_plato;
        var precio_bebida;
        var precio_segundo_plato;
    
        function comentario_aleatorio() {
            let numero = Math.floor(Math.random() * 3) + 1;
        
            if (numero === 1) {
                return("¡es una muy buena elección!");
            }
            else if (numero === 2) {
                return("¡también es mi favorito!");
            }
            else {
                return("¡te vas a poner las botas!");
            }
        }
    
        function elegir_bebida() {
            let mensaje = "Por favor, elige tu bebida favorita del menú.\n";
            for (let bebida in bebidas_menu) {
                mensaje += `${bebida}: $${bebidas_menu[bebida]}\n`;
            }
            let eleccion = prompt(mensaje);
            bebida_elegida = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase();

            if (bebida_elegida in bebidas_menu) {
                let comentario = comentario_aleatorio();
                alert(`${bebida_elegida} ${comentario}`);
                precio_bebida = Number(bebidas_menu[bebida_elegida])
                precio_total += precio_bebida;
            } else {
                alert("No escribiste una bebida válida.");
                elegir_bebida();
            }
        }
    
        function elegir_segundo_plato() {
            let mensaje = "Por favor, elige tu segundo plato favorito del menú.\n";
            for (let plato in segundo_platos) {
                mensaje += `${plato}: $${segundo_platos[plato]}\n`;
            }
            let eleccion = prompt(mensaje);
            plato_secundario_elegido = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase();

            if (plato_secundario_elegido in segundo_platos) {
                let comentario = comentario_aleatorio();
                alert(`${plato_secundario_elegido} ${comentario}`);
                precio_segundo_plato = Number(segundo_platos[plato_secundario_elegido])
                precio_total += precio_segundo_plato;
            } else {
                alert("No escribiste un plato válido.");
                elegir_segundo_plato();
            }
        }
    
        function elegir_primer_plato() {
            let mensaje = "Por favor, elige tu plato principal favorito:\n";
            for (let plato in primer_platos) {
                mensaje += `${plato}: $${primer_platos[plato]}\n`;
            }
    
            let eleccion = prompt(mensaje);
            plato_principal_elegido = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase();
    
            if (plato_principal_elegido in primer_platos) {
                let comentario = comentario_aleatorio();
                alert(`${plato_principal_elegido} ${comentario}`);
                precio_primer_plato = Number(primer_platos[plato_principal_elegido])
                precio_total += precio_primer_plato;
                elegir_segundo_plato();
                elegir_bebida();
                alert("¡Gracias por tu pedido!");
            } else {
                alert("No escribiste un plato válido.");
                elegir_primer_plato();
            }

            let resumen = `Resumen del pedido:\n`;
    
            if (plato_principal_elegido) {
                resumen += ` ${plato_principal_elegido} - $${precio_primer_plato}\n`;
            }
    
            if (plato_secundario_elegido) {
                resumen += ` ${plato_secundario_elegido} - $${precio_segundo_plato}\n`;
            }
    
            if (bebida_elegida) {
                resumen += ` ${bebida_elegida} - $${precio_bebida}\n`;
            }
            resumen += `Total: $${precio_total}\n`;
    
            alert(resumen);
        }

        elegir_primer_plato();
    }

    tomar_pedido();
}


 
     
