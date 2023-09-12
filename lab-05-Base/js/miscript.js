// Caso 1: obtener cabezera
let cabecera = document.head;
console.log (cabecera)

// Caso 2: obtener body
let cuerpo = document.body;
console.log (cuerpo)

//Caso 3: recuperar un nodo y propiedades
let lpAntiguos = document.getElementById("antiguo");
console.log (lpAntiguos )

let arr_antiguos= []

let nodos = lpAntiguos.childNodes
for (i=0; i< nodos.length; i++){
    console.log (nodos[i])

    if ( nodos [i].nodeType == document.ELEMENT_NODE){
        arr_antiguos.push(nodos[i].textContent)
    }
}
document.getElementById("rpta1").innerHTML = arr_antiguos
//lo mismo pero con los nuevos
let lpNuevos = document.getElementById("moderno");
console.log (lpNuevos )

let arr_nuevos= []

let nodosN = lpNuevos.childNodes
for (i=0; i< nodosN.length; i++){
    console.log (nodosN[i])

    if ( nodosN [i].nodeType == document.ELEMENT_NODE){
        arr_nuevos.push(nodosN[i].textContent)
    }
}
document.getElementById("rpta2").innerHTML = arr_nuevos

//Caso 5: Concatenar arreglos
document.getElementById("rpta3").innerHTML= arr_antiguos.concat(arr_nuevos)

//Caso 6: Concatenar arreglos en STRING
document.getElementById("rpta3").innerHTML= arr_antiguos.join("*")

//Caso 7: ubicar la posicion en un arreglo
let pos = arr_nuevos.indexOf("Go")
document.getElementById("rpta3").innerHTML= pos

//Caso 8: Insertar elemento (el 0 es para borrar)
arr_nuevos.splice(1, 0 , "unlanda" , "Malbolge" )
document.getElementById("rpta3").innerHTML= arr_nuevos
//Caso 9: borrar elemento 
arr_nuevos.splice(3, 1 )
document.getElementById("rpta3").innerHTML= arr_nuevos

//Caso 10: borrar ultimo elemento
var elemento = arr_nuevos.pop()
document.getElementById("rpta1").innerHTML= arr_nuevos

//Caso 11: borrar primer elemento
var elemento = arr_nuevos.shift()
document.getElementById("rpta1").innerHTML= arr_nuevos

//Caso 12: colocar elemento al final
arr_nuevos.push("Dart")
document.getElementById("rpta1").innerHTML= arr_nuevos
//Caso 13: colocar elemento al inicio
arr_nuevos.unshift("Sql")
document.getElementById("rpta1").innerHTML= arr_nuevos

//Caso 14: Ordenar arreglo
arr_nuevos.sort()
document.getElementById("rpta1").innerHTML= arr_nuevos
//Caso 15: Ordenar alrevez (cuidado: no funciona sin Sort)
arr_nuevos.reverse()
document.getElementById("rpta1").innerHTML= arr_nuevos

//Caso 16: Generar Html
var rpta = []
rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brasil - 1 </li>")
rpta.push("<li> Chile - 0 </li>")
rpta.push("</ol>")

var contenido = rpta.join(" ")
document.getElementById("rpta1").innerHTML= contenido


