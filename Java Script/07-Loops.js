let dias = ['Lunes','Martes','Miercoles','Jueves']
console.log(dias.length);

for(let i=0;i<dias.length;i++){
    console.log(dias[i]);
}
dias.forEach(dia=>console.log(dia));

var i = 0
while(i<=dias.length){
    console.log(dias[i]);
    i++
}