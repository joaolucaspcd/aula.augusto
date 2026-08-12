const textoVermelho = document.getElementById("SpanTextoVermelho");
const textoVerde = document.getElementById("SpanTextoVerde");
const textoAzul = document.getElementById("SpanTextoAzul");

const BotaoAlteraVermelho = document.getElementById("btnAlterarTextoVermelho");
const BotaoAlteraVerde = document.getElementById("btnAlterarTextoVerde");
const BotaoAlteraAzul = document.getElementById("btnAlterarTextoAzul");

BotaoAlteraVermelho.addEventListener( 'click', () => {
    textoVermelho.style.color = "red";
})

BotaoAlteraVerde.addEventListener( 'click', () => {
    textoVerde.style.color = "green";
});

