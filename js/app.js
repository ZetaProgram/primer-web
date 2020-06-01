var calculadora = function(suma1, suma2){
    var suma1 = parseFloat(document.getElementById("b1").value);
    var suma2 = parseFloat(document.getElementById("b2").value);

    var resultado = suma1 + suma2;
    return resultado;
}