function calcular2(){
    var num = parseInt(document.getElementById('numero2').value);
    for(let c = 0; c < num; c++){
        if(c %2==0)
        document.write(c+'<br>')
    }
}