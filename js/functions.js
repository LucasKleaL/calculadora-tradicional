$(document).ready(function(){


//strings utilizadas para representar a expressão
var stringVisor = "";
var stringBruta = "";

//valores dos resultados das operações.
var soma;
var subtracao;
var divisao;
var multiplicacao;
var restoDivisao;
var potenciacao;
var raizQuadrada;
var porcentagem;

//valores para operação
var valor1;
var operacao;
var valor2;
var operacao2;

//valores armazenados na memória da calculadora.
var resultadoOperacaoAnterior;
var guardadoNaMemoria;

//valores resultantes de operações realizadas com valores armazenados na memória.
var somaMemoria;
var subtracaoMemoria;
var multiplicacaoMemoria;
var divisaoMemoria;



//botao de RESULTADO. Responsável por verificar quais operações foram solicitadas e acioná-las.
$("#resultado").click(function(){

    stringBruta = stringVisor //separa a string que está sendo exibida no visor e a string que ficará armazenada na memoria
    var vetorOperacao = stringBruta.split(" "); //reparte a string inserida em um array


    stringVisor = "" //deixa a string que armazena a expressao do visor em branco
    $("#visor").val(""); //deixa o visor em branco




    valor1 = parseFloat(vetorOperacao[0]); //atribui a variavel valor1 um com a posicao 0 do array, cada posicao acaba a cada espaco em branco
    operacao = vetorOperacao[1]; //atribui a variavel operacao com a posicao 1 do array
    valor2 = parseFloat(vetorOperacao[2]); //atribui a variavel valor2 um com a posicao 2 do array
    operacao2 = vetorOperacao[3];
    




    if(vetorOperacao[1] === "**"){ //verifica se a operacao é de potenciacao; se for substitui o identificador da operacao pela string "pow"
        operacao = "pow"
    }

    if(vetorOperacao[3] === "%" || vetorOperacao[1] === "%"){ //verifica se a operação é de porcentagem; se for substitui o identificador da operação pela string "percent"
        operacao = "percent"
    }
    if(vetorOperacao[1] === "√"){ //verifica se a operação é de raiz quadrada; se for substitui o identificador da operação pela string "sqrt"
        operacao ="sqrt"
    }



    //verifica qual operacao esta sendo solicitada
    if (operacao === "+"){

        soma = (valor1 + " + " + valor2 + " = " + (valor1 + valor2));

        $("#visor").val(soma);

        resultadoOperacaoAnterior = soma; //guarda o valor resultante da soma em uma variável.
    }
    else if (operacao === "-"){

        subtracao = (valor1 + " - " + valor2 + " = " + (valor1 - valor2));

        $("#visor").val(subtracao);

        resultadoOperacaoAnterior = subtracao //guarda o valor resultante da ssubtração em uma variável.
    }
    else if (operacao ==="x"){

        multiplicacao = (valor1 + " x " + valor2 + " = " + (valor1 * valor2));

        $("#visor").val(multiplicacao);

        resultadoOperacaoAnterior = multiplicacao //guarda o valor resultante da multiplicação em uma variável.
    }
    else if (operacao === "/"){

        divisao = (valor1 + " ÷ " + valor2 + " = " + (valor1 / valor2));

        $("#visor").val(divisao);

        resultadoOperacaoAnterior = divisao //guarda o valor resultante da divisão em uma variável.
    }
    else if (operacao === "percent"){

            porcentagem = ((valor1 / 100) * valor2)

            $("#visor").val(porcentagem)

            resultadoOperacaoAnterior = porcentagem //guarda o valor resultante da porcentagem em uma variável.
    }
    else if (operacao === "pow"){

        potenciacao = (valor1 + "^" + valor2 + " = " + Math.pow(valor1, valor2));

        $("#visor").val(potenciacao);

        resultadoOperacaoAnterior = potenciacao //guarda o valor resultante da potenciação em uma variável.
    }
    else if (operacao === "//"){

        restoDivisao = (valor1 + " mod " + valor2 + " = " + (valor1 % valor2));

        $("#visor").val(restoDivisao);

        resultadoOperacaoAnterior = restoDivisao //guarda o valor resultante do resto da divisão em uma variável.
    }
    else if (operacao === "sqrt"){
        
        raizQuadrada = ("√" + valor2 + " = " + Math.sqrt(valor2));

        $("#visor").val(raizQuadrada);

        resultadoOperacaoAnterior = raizQuadrada //guarda o valor resultante da raiz quadrada em uma variável.
    }

    $(valor1).val("");
    $(valor2).val("");
    $(operacao).val("");
    $(operacao2).val("");
    
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

    stringVisor +=  ' ** '

    $("#visor").val(stringVisor);

});

$("#restoDivisao").click(function(){

    stringVisor += ' // '

    $("#visor").val(stringVisor);

});

$("#raizQuadrada").click(function(){

    stringVisor = '0' + ' √ '

    $("#visor").val(stringVisor);

});


//botoes de opcoes da calculadora

$("#limpaVisor").click(function(){ //botao "C". Limpa o visor e a string que representa a expressão. 

    $("#visor").val("");
    stringVisor = ""

});

$("#limpaMemoria").click(function(){ //limpa o resultado armazenado na memoria da calculadora.

    guardadoNaMemoria = null;

});

$("#guardaValorMemoria").click(function(){ //guarda o valor do resultado da operação anterior na memória da calculadora.

    guardadoNaMemoria = parseFloat(resultadoOperacaoAnterior)

});

$("#somarMemoria").click(function(){ //operação de soma entre o valor armazenado na memoria e o valor inserido no visor.

    var valor1Visor = stringVisor.split();

    somaMemoria = (guardadoNaMemoria + " + " + " = " + (guardadoNaMemoria + parseFloat(valor1Visor)));

    $("#visor").val(somaMemoria)

});

$("#subtrairMemoria").click(function(){ //operação de subtração entre o valor armazenado na memoria e o valor inserido no visor.

    var valor1Visor = stringVisor.split();
    
    subtracaoMemoria = (guardadoNaMemoria + " - " + valor1Visor + " = " + (guardadoNaMemoria - parseFloat(valor1Visor)));

    $("#visor").val(subtracaoMemoria)

});

$("#multiplicarMemoria").click(function(){ //operação de multiplicação entre o valor armazenado na memoria e o valor inserido no visor.

    var valor1Visor = stringVisor.split();
    parseFloat(valor1Visor)

    multiplicacaoMemoria = (guardadoNaMemoria + " x " + valor1Visor + " = " + (guardadoNaMemoria * valor1Visor));

    $("#visor").val(multiplicacaoMemoria)

});

$("#dividirMemoria").click(function(){ //operação de divisão entre o valor armazenado na memoria e o valor inserido no virsor

    var valor1Visor = stringVisor.split();
    parseFloat(valor1Visor);

    divisaoMemoria = (guardadoNaMemoria + " / " + valor1Visor + " = " + (guardadoNaMemoria / valor1Visor));

    $("#visor").val(divisaoMemoria)
});



});