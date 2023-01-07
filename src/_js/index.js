/* 
OBJETIVO- quando clicarmos na aba temos que monstrar o
conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo
anterior

passo 1 - dar um jeiito de pegar os elementos que
representam as abas no HTML

passo 2 - dar um jeito de identificar o clique no
elemento da aba

passo 3 - quando o usuário clicar, desmarcar a aba selecionada

passo 4 - marcar a aba clicada como selecionada

passo 5 - esconder o conteúdo anterior

passo 6 - motrar o conteúdo da aba selecionada


// METODO CONVENCIONAL

//passo 1 - dar um jeiito de pegar os elementos que
//representam as abas no HTML
const abas = document.querySelectorAll(".aba");

//passo 2 - dar um jeito de identificar o clique no
//elemento da aba
 abas.forEach((aba => {
     aba.addEventListener("click", function(){

         if(aba.classList.contains("selecionado")){
             return;
         }
        
         //passo 3
         const abaSelecionada = document.querySelector(".aba.selecionado");
         abaSelecionada.classList.remove("selecionado");

         //passo 4
         aba.classList.add("selecionado");

         // //passo 5
         const informacaoSelecionada = document.querySelector(".informacao.selecionado");
         informacaoSelecionada.classList.remove("selecionado");

         //passo 6
         const idDoElementoInformacaoDaAba = `informacao-${aba.id}`
        
         const informacaoASerMostrada = document.getElementById(idDoElementoInformacaoDaAba);
         informacaoASerMostrada.classList.add("selecionado");



    })
}))

*/

// METODO POR FUNCTIONS

//passo 1 - dar um jeiito de pegar os elementos que
//representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //passo 2 - dar um jeito de identificar o clique no
    //elemento da aba
     aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
             return;
        }

        selecionarAba(aba)

        mostrarInformacaoDaAba(aba)

     });
});
function selecionarAba(aba){
    //passo 3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
        
    //passo 4
    aba.classList.add("selecionado");
}
function mostrarInformacaoDaAba(aba){
    //passo 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6
    const idDoElementoInformacaoDaAba = `informacao-${aba.id}`
    
    const informacaoASerMostrada = document.getElementById(idDoElementoInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}