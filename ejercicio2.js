function crearEmp(){
    let num = document.getElementsByTagName("tr").length;
    console.log(num);
    let DNI = prompt("Añada el DNI del empleado")
    if (document.getElementsByTagName("tr").){
        let nombre = prompt("Introduzca el nombre")
        let apellidos = prompt("Introduzca los apellidos")
        tabla = document.getElementById("tabla")
        fila = document.createElement("tr")

        columnaNum = document.createElement("td")
        columnaNum.appendChild(document.createTextNode(num))
        columnaDNI = document.createElement("td")
        columnaDNI.appendChild(document.createTextNode(DNI))
        columnaNom = document.createElement("td")
        columnaNom.appendChild(document.createTextNode(nombre))
        columnaApe = document.createElement("td")
        columnaApe.appendChild(document.createTextNode(apellidos))

        fila.appendChild(columnaNum)
        fila.appendChild(columnaDNI)
        fila.appendChild(columnaNom)
        fila.appendChild(columnaApe)

    }else{
        console.log("Error, empleado ya registrado")
    }
}