
//  Funcion para GIF y Logo 
 // A função foi implementada com jquery, e uma transicão do gif para o logo 
$(document).ready(function() {
    setTimeout(function() {
        $(".logo-gif").fadeOut(1500);
    },3000);
 
    setTimeout(function() {
        $(".logo-png").fadeIn(1500);
    },4000);
});


//  Função da escada
//  A função foi implementada para mostrar o resultado no console e tamb;em ser mostrada no body do html
function escada(x1) {

//  Variavels, podem notar que a variavel 'X' 'e o input do documento, e a variavel x1 e o valor num'erico do input 
var x = window.document.getElementById("input");
var x1 = Number(x.value);
let lista = [];

//  Condicional que indica os valores crescentes que tomara a variavel 'x1' desde 1 at'e o valor indicado pelo input da variavel 'x'
for (let i = 1; i <= x1; i++) {
    let espaco = x1 - i;
    lista.push(" ".repeat(espaco) +"*".repeat(i));  //  Implementação do metodo 'repeat' para repetir os espação vacios que precedem ao caracter especial '*' no metodo 'push' da variavel 'lista' para assim gerar a linheas adjacentes com o incremento do 'i++' para ir aumento em uma unidade por linhea 
    }
lista.forEach(function (item) { //  Foi implementado o 'forEach' no array por que ele posui internamento o loop e for, assim o c'odigo fica mas limpo
    console.log(item);    //  Saida do resultado no console
    res.innerHTML = lista;   //  Saida do resultado no body do docuemento HTML

//  Implementação de elemtnos HTML para conseguir formatar o resultado de saida.
    var texto = $("#res").html();
    texto = texto.replaceAll(",", "<br>");  // Foi utilizado o metodo 'replaceAll' para substituir as comas, por quebres de linha.
     $("#res").html(texto);
        });
    }
    // Função Verificar Senha
    function verificaForcaSenha() 
    {   
        // Variaveis
	    var numeros = /([0-9])/;
	    var letraMinuscula = /([a-z])/;
        var letraMaiuscula = /([A-Z])/;
	    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        var pass = window.document.getElementById("password");
        var passValue = (pass.value).length;
        var faltam = (6 - passValue)

	    if($('#password').val().length < 6)  // Condicional da contagem menor que 6
	    {
		    $('#password-status').html("<span style='color:red'>Senha Fraca! insira no mínimo 6 caracteres </span>" + ("Faltam "+ faltam + " caracteres."));
	    } else {  	
		    if($('#password').val().match(numeros) && $('#password').val().match(letraMinuscula) && $('#password').val().match(letraMaiuscula) && $('#password').val().match(chEspeciais))           
		        {
                    $('#password-status').html("<span style='color:green'><b>Senha Forte Parabens!</b></span>");
            }
	    }

        if($('#password').val().length >= 6 ) //Condicional da contagem maior ou igual a 6
        {   
            $('#password-status').html("<span style='color:red'>Senha Fraca! insira no mínimo 6 caracteres </span>" + ("Faltam "+ 0 + " caracteres."));

	        if($('#password').val().match(numeros) && $('#password').val().match(letraMinuscula) && $('#password').val().match(letraMaiuscula) && $('#password').val().match(chEspeciais))           
		        {
                    $('#password-status').html("<span style='color:green'><b>Senha Forte Parabens!</b></span>");
            }else{

                $('#password-status').html("<span style='color:red'>Senha fraca ainda! verifique as condições </span>" + ("Faltam "+ 0 + " caracteres."));
            }  
        }  
    }

