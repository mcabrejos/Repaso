function sumar() {
    let op1 =  document.getElementById("id1").value
    let op2 =  document.getElementById("id2").value

    valor= parseInt(op1) + parseInt(op2)

    document.getElementById("rpta").innerHTML=valor
}