$(document).ready(function(){


var stringVisor = '';
var soma;
var subtracao;
var divisao;
var multiplicacao;
var restoDivisao;
var potenciacao;
var raizQuadrada;
var porcentagem;

var valor1 = 0;
var valor2 = 0;
var valorOperacao;

var stringOperacao = 0000000;





$("#resultado").click(function(){

    //loop que busca o valor 1 e valor 2 dentro da string do visor

    for (var i; i <= stringVisor.length; i++){

        if((stringVisor[i]) == (0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)){

            valor1 += stringVisor[i];
        
        }
        else if((stringVisor[i]) === ("+" || "-" || "*" || "/" || "//" || "%" || "^")){

            valorOperacao = stringVisor[i];

        }

        
    }

    $("#visor").val("");
    $("#visor").val(valor1);
        
})










//botoes de numeros/caracteres

$("#nZeroZero").click(function(){

    stringVisor += '00'

    $("#visor").val(stringVisor);

});

$("#nZero").click(function(){

    stringVisor += '0'

    $("#visor").val(stringVisor);

});

$("#nUm").click(function(){

    stringVisor += '1'

    $("#visor").val(stringVisor);

});

$("#nDois").click(function(){

    stringVisor += '2'

    $("#visor").val(stringVisor);

});

$("#nTres").click(function(){

    stringVisor += '3'

    $("#visor").val(stringVisor);

});

$("#nQuatro").click(function(){

    stringVisor += '4'

    $("#visor").val(stringVisor);

});

$("#nCinco").click(function(){

    stringVisor += '5'

    $("#visor").val(stringVisor);

});

$("#nSeis").click(function(){

    stringVisor += '6'

    $("#visor").val(stringVisor);

});

$("#nSete").click(function(){

    stringVisor += '7'

    $("#visor").val(stringVisor);

});

$("#nOito").click(function(){

    stringVisor += '8'

    $("#visor").val(stringVisor);

});

$("#nNove").click(function(){

    stringVisor += '9'

    $("#visor").val(stringVisor);

});

$("#nDez").click(function(){

    stringVisor += '10'

    $("#visor").val(stringVisor);

});

$("#nCem").click(function(){

    stringVisor += '100'

    $("#visor").val(stringVisor);

});

$("#nMil").click(function(){

    stringVisor += '1000'

    $("#visor").val(stringVisor);

});

$("#ponto").click(function(){

    stringVisor += '.'

    $("#visor").val(stringVisor);

});


//botoes de operacoes

$("#soma").click(function(){

    stringVisor += ' + '

    $("#visor").val(stringVisor);

});

$("#subtracao").click(function(){

    stringVisor += ' - '

    $("#visor").val(stringVisor);

});

$("#multiplicacao").click(function(){

    stringVisor += ' x '

    $("#visor").val(stringVisor);

});

$("#divisao").click(function(){

    stringVisor += ' / '

    $("#visor").val(stringVisor);

});

$("#porcentagem").click(function(){

    stringVisor += ' % '

    $("#visor").val(stringVisor);

});

$("#potenciacao").click(function(){

    stringVisor += ' ^ '

    $("#visor").val(stringVisor);

});

$("#restoDivisao").click(function(){

    stringVisor += ' // '

    $("#visor").val(stringVisor);

});

$("#raizQuadrada").click(function(){

    stringVisor += ' √ '

    $("#visor").val(stringVisor);

});





});