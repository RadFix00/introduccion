"use strict";
//crear contenedores
/*
1. var= global
2. let = local - variables
3. const = constantess*/

const btnValidar= document.getElementById("validar");
//console.log(btValidar);
//Al addEventlistener debo pasar dos paramentros
btnValidar.addEventListener("click",function(e) {
    e.preventDefault();
    let form = document.getElementById("dataForm");
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form[6].value);
    console.log(form[7].value);

});