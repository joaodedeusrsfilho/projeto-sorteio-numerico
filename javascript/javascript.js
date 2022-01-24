//pegando acesso aos elementos da pagina
var acesso_ao_h1_resultado=document.querySelector(".h1-resultado");
var acesso_ao_botao_sorteio = document.querySelector(".botao-sortear");
//variavel array que vai ter os numeros de 0 a 30
var numero_para_sorteio = [];
//laço for para empurrar os numeros para a variavel de sorteio
for(x=1;x<=4;x++){
    //push = empurrar os valores para a variavel numero para sorteio
    numero_para_sorteio.push(x);
}

//definir uma ação quando o botão sorteio for clicado
acesso_ao_botao_sorteio.addEventListener("click", () =>
 {   
    var premiado = numero_para_sorteio[Math.floor(Math.random() * numero_para_sorteio.length)];  
    if (premiado === 1){
        acesso_ao_h1_resultado.innerHTML = `Número: ${premiado} <br>Parabéns Júnior!`;
    }
    if (premiado === 2){
        acesso_ao_h1_resultado.innerHTML = `Número: ${premiado} <br>Parabéns Eliene!`;
    }
    if (premiado === 3){
        acesso_ao_h1_resultado.innerHTML = `Número: ${premiado} <br>Parabéns Gloria!`;
    }
    if (premiado === 4){
        acesso_ao_h1_resultado.innerHTML = `Número: ${premiado} <br>Parabéns João de Deus!`;
    }
}   
);


