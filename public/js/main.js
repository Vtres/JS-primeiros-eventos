var frase = $(".text").text();
var numPalavras = 0;
numPalavras = frase.split(/\S+/).length - 1;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});
var tempo = $("#segundos").text();
campo.one("focus", function(){
   
    var cronometroId = setInterval(function(){
        tempo--;
        $("#segundos").text(tempo);
        if(tempo < 1){
            campo.attr("disabled",true);
            //alert("GAME OVER");
            //window.location.reload();
            clearInterval(cronometroId);
        }
        
    },1000);

});



