var valores =[];
var result_num;
var result_txt;
var n;
var nx;

function RealizarProcedimiento(){
    result_txt = "";
    result_num = 1;
    var n = document.getElementById('Numero').nodeValue;

    if(n>=5 && n<=20){
        document.getElementById("Operacion").innerHTML = n + "*" + n + "=" + nx;
    }
    else{
        alert("Insertar un número entre 5 y 20");
    }
    document.getElementById("nx").innerText = "El resultado es " + nx;
}

function operacion(num){
    nx=n+n;
}

function operacion2(num){
    nx=n1*n2;
}
