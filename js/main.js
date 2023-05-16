/*sistema de reserva de asiento para viajar en un conjunto de autos que solo admiten 4 personas ademas del conductor*/

let autos = {
    auto1: ["Conductor1<br>"],
    auto2: ["Conductor2<br>"],
    auto3: ["Conductor3<br>"],
    auto4: ["Conductor4<br>"]
}

const inscribir = (pasajero,auto)=>{
personas = autos[auto];
if (personas.length >= 5) {
    document.write(`Lo sentimos mucho ${pasajero}, los asientos del ${auto} ya están ocupados. Pruebe en otro auto!<br><br>`);
} else {
    personas.push(pasajero);
    if (auto == "auto1") {
        autos = {
            auto1: personas,
            auto2: autos['auto2'],
            auto3: autos['auto3'],
            auto4:autos['auto4']
        }
    }
    else if (auto == "auto2") {
        autos = {
            auto1: autos['auto1'],
            auto2: personas,
            auto3: autos['auto3'],
            auto4:autos['auto4']
        }
    }else if (auto == "auto3") {
        autos = {
            auto1: autos['auto1'],
            auto2: auto['auto2'],
            auto3: personas,
            auto4:autos['auto4']
        }
    }else if (auto == "auto4") {
        autos = {
            auto1: autos['auto1'],
            auto2: auto['auto2'],
            auto3: autos['auto3'],
            auto4: personas
        }
    }
    document.write(`¡Felicidades ${pasajero}! tu lugar en el ${auto} ha sido reservado exitosamente.<br><br>`);
}
}

inscribir("Maxi","auto1");
inscribir("Raul","auto1");
inscribir("Eric","auto1");
inscribir("Paula","auto1");
inscribir("Nacho","auto1");
inscribir("Nacho","auto2");
inscribir("Pablo","auto2");
inscribir("Aldi","auto2");
inscribir("Nico","auto2");
inscribir("Ludmi","auto2");
inscribir("Ludmi","auto3");
inscribir("Jose","auto3");
inscribir("Vane","auto3");
inscribir("Blas","auto3");
inscribir("Fran","auto3");
inscribir("Fran","auto4");
inscribir("Rodri","auto4");
inscribir("Nebai","auto4");
inscribir("Rama","auto4");
inscribir("Ale","auto4");

document.write(autos['auto1'] + "<br>");
document.write(autos['auto2'] + "<br>");
document.write(autos['auto3'] + "<br>");
document.write(autos['auto4'] + "<br>")