const usuario = prompt("Ingrese su nombre: ").trim();
if (usuario.length < 2) {
    alert(`Nombre inválido, intentelo nuevamente.`);
    repeat
} else {
    alert(`Bienvenido, ${usuario}.`);
}
alert(`A continuación ingrese la cantidad de capital a recibir y cantidad de cuotas.
Tenga en cuenta que a mayor cantidad de cuotas, mayor el interés a pagar.`);

const prestamo = parseInt(prompt("Ingrese el capital a recibir(Máximo $200.000):"));
let interes = 20
let interes1 = 35
let interes2 = 55

if ((prestamo <= 200000) && ( prestamo > 0 )) {
    alert(`Monto aceptado. Capital a recibir: $${prestamo}`);
} else {
 alert("Monto Inválido.");   
}

const cuota = prompt("Ingrese en cuantas cuotas quiere abonar(*3,6...12 como máximo):");


if ((prestamo <= 200000 ) && (cuota <= 3 )) {
    alert(`Su interes es de ${interes}%.`)
    alert(`Deberá abonar a ${cuota} meses un valor de: $${parseInt(calcular(prestamo, cuota, "/")*1.20)} mensual.`);
        
    } else if ((cuota > 3) && (cuota <=6)){
        alert(`Su interés es de ${interes1}%.`);
        alert(`Deberá abonar a ${cuota} meses un valor de: $${parseInt(calcular(prestamo, cuota, "/")*1.35)} mensual.`);  
    } else if ((cuota > 6) && (cuota <=12)){
        alert(`Su interés es de ${interes2}%.`)
        alert(`Deberá abonar a ${cuota} meses un valor de: $${parseInt(calcular(prestamo, cuota, "/")*1.55)} mensual.`);
    } else {
        alert("Error, cantidad de cuotas inválida.")
    }
    

