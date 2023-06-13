function calcular3(){
    var num= parseInt(document.getElementById('numero3').value);
    sum = 0;
    for(let d = 0; d < num; d++){
        sum += d;
        document.write(d+'<br>')
    }
    document.write("La suma de los primeros 100 numeros son:"+sum);
}