function iniArray(){
    let arrayNombres = [];
    let comprobante = true;
    let x = ""
    for (let i = 1; i <= 5; i++){
        x = prompt("Introduzca el nombre numero"+i);
        if (arrayNombres.indexOf(x) != -1){
            comprobante = false;
        }
        while (comprobante == false){
            x = prompt("Nombre repetido, introduzcalo de nuevo");
            if (arrayNombres.indexOf(x) == -1){
                comprobante = true;
            }
        }
        arrayNombres.push(x);
    }

    let arrayOrdenado = arrayNombres.sort()
    let palabra = ""
    let longitud = arrayOrdenado.length
    for (let j = 0; j< longitud; j++){
        console.log(arrayOrdenado[j].charAt(0).toUpperCase());
    }
}