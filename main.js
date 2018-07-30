var lasbutaca = function () {
    var butaca= 20;
    var tipobucata = prompt('que sala desea');
    var cualbutaca = parseInt(prompt("que numero de butaca es"));
    var anchobutaca = parseInt(prompt('cual es el ancho'));
    if (cualbutaca <= 0 || anchobutaca <= 100) {

        if (cualbutaca < 20 || anchobutaca <= 10) {
            division = cualbutaca / anchobutaca
            alert("la division es\n" + division);
            x = division
            y = Math.ceil(x);
            alert("el numero de fila es \n" + y);

        } else {

            alert("mal ingresado elija de 1 a 20")
        }
    } else {
        alert("mal ingresado elija de 1 a 20")
    }
    for(var butac = 20; butac <= 20; butac++){
    }

}