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

var valor1;
var valor2;
var valorOperacao;


$("#resultado").click(function(){

    var vetorOperacao = stringVisor.split(" "); //reparte a string inserida em um array

    valor1 = parseFloat(vetorOperacao[0]); //atribui a variavel valor1 um com a posicao 0 do array, cada posicao acaba a cada espaco em branco
    operacao = vetorOperacao[1]; //atribui a variavel operacao com a posicao 1 do array
    valor2 = parseFloat(vetorOperacao[2]); //atribui a variavel valor2 um com a posicao 2 do array

    $(stringVisor).val("");
    $("#visor").val(""); //deixa o visor em branco

    //verifica qual operacao esta sendo solicitada
    if (operacao === "+"){

        soma = valor1 + valor2;

        $("#visor").val(soma);
    }
    else if (operacao === "-"){

        subtracao = valor1 - valor2;

        $("#visor").val(subtracao);
    }
    else if (operacao ==="x"){

        multiplicacao = valor1 * valor2;

        $("#visor").val(multiplicacao);
    }
    else if (operacao === "/"){

        divisao = valor1 / valor2;

        $("#visor").val(divisao);
    }
    else if (operacao === "%"){

        

    }
    else if (operacao === "^"){

        potenciacao = valor1 ** valor2;

        $("#visor").val(potenciacao);
    }
    else if (operacao === "//"){

        restoDivisao = valor1 % valor2;

        $("#visor").val(restoDivisao);

    }
    else if (operacao === "√"){

        var numero = valor1;
        var divisor = valor2, dividido = 0;
        for (var  i = 0; i < numero; i++) {
            dividido = numero / divisor;
            divisor = (dividido + divisor) / 2;
        }

        raizQuadrada = divisor

        $("#visor").val(raizQuadrada);
    }
    
});







//botoes de opcoes da calculadora

$("#limpaVisor").click(function(){

    $("#visor").val("");
    $(stringVisor).val("");

});


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