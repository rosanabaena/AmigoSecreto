//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armazenar os nomes
let amigos = [];
let sort = [];
let sorteado = 0;

function atualizaElemento(tag,texto){
    let list = document.getElementById(tag);
    list.innerHTML = texto;
 }

//limpar o campo do nome depois de incluido na lista
function limpaCampo(){
    campo = document.getElementById('amigo');
    campo.value = '';
}

function list(){
    // Seleciona o elemento <ul> onde os <li> serão adicionados
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    let li = document.createElement("li");
    
    // Percorre o array de amigos e adiciona cada nome como um elemento<li>
    for (let i=0; i<= amigos.length; i++){       
        // Verifica se o valor não é undefined ou null para listar        
        if (amigos[i] !== undefined && amigos[i] !== null) {    
            list.innerHTML += `<li>${amigos[i]}</li>`;
            //console.log(amigos[i]);  
        } 
    }
}

//validacoes do nome digitado
function validaNomeDigitado(nomeDigitado){
    //remover espacos do nome
    let nome = nomeDigitado.replace(/^\s+|\s+$/g, "");

    //valida nome duplicado
    if (amigos.includes(nome)){
        alert(`O nome ${nome} já está na lista`);
        limpaCampo();
        return;
    }

    //valida se o campo esta vazio
    if (nome == ''){
        alert('Por favor, digite um nome!');
        return;
    }

    //valida se o nome digitado possui apenas letras
    if (!/^[a-zA-Z\s]+$/.test(nome)){
        alert(`Nome ${nome} inválido! O nome deve conter apenas letras!`);
        return;    
    }
    //adicionar o nome na lista de amigos
    amigos.push(nome);
}

//adicionar nome na lista
function adicionarAmigo(){
    let nomeDigitado = document.getElementById('amigo').value; 
  
    //identificar os nomes digitados separados por virgulas e inclui separados na lista
    if(nomeDigitado.includes(',')){
        let nomesDigitados = nomeDigitado.split(',');
        //identifica cada nome digitado, faz a validacao e adiciona amigo
        for (let item of nomesDigitados){
            validaNomeDigitado(item);
        }
    }else {
        validaNomeDigitado(nomeDigitado);
    }
       
    //listar nomes do array no elemento 'ul' como 'li' a serem mostrados
    list();
  
    //limpar o campo
    limpaCampo();
        
    //esconder o elemento resultado quando está adicionando amigos
    atualizaElemento('resultado',''); 
}

//sortear amigo / exibir resultado / limpar lista
 function sortearAmigo(){
    
    //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.  
    let quantidadeAmigos = amigos.length;
    console.log(`quantidade de amigos: ${quantidadeAmigos}`);
    
    if(sorteado == 0 && quantidadeAmigos <2){
        alert('Adicione ao menos 2 amigos para sortear!');
        return;
    }

    if(sorteado == 1 && quantidadeAmigos == 0){
        alert('Já foram sorteados todos os amigos da lista!');
        reiniciarJogo();
        sorteado = 0;
        document.getElementById('auto-sorteio').setAttribute('disabled','true');
        return;
    }
       
    //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
    let indiceSorteado = parseInt(Math.random() * (Math.floor(quantidadeAmigos)) )  ;
    console.log (`Indice sorteado: ${indiceSorteado}`);
    
    //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
    let amigoSorteado = amigos[indiceSorteado];
    
    //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`Amigo sorteado: ${amigoSorteado}`);
    
    confetti({
        particleCount: 500,  // Quantidade de confetes
        spread: 90,         // O quanto eles se espalham
        origin: { y: 0.6 }  // Posição inicial na tela
    });

    //retira do array o nome sorteado
    console.log(`Antes do sorteio>>>>${amigos}`);
    if (indiceSorteado > -1){
        amigos.splice(indiceSorteado,1)
        //incluir no array sort
        sort.push(amigoSorteado);
    }
    console.log(`Depois do sorteio>>>>${amigos}`);
    console.log(`sort = ${sort}`);

    //atualizaElemento('listaAmigos','');
    sorteado=1;

    //habilita o botao para trocar de amigo
    document.getElementById('auto-sorteio').removeAttribute('disabled');

    //atualiza lista
    list();
    

}

//Reiniciar Amigo Secreto
function reiniciarJogo(){
    atualizaElemento('amigo','');
    atualizaElemento('resultado','');
    atualizaElemento('listaAmigos','');
    amigos = [];
    sort=[];
    sorteado = 0;
}

// caso queria trocar o amigo sorteado
function trocarAmigo() {
    if(sorteado == 1 && sort.length > 0 && amigos.length > 0){
        //alert('Sortear novamente!!!');
        amigos.push(sort[sort.length - 1]);
        sort.pop();   
        console.log(`sort: ${sort}`)     ;
        console.log(`amigos: ${amigos}`)     ;
        atualizaElemento('resultado','');
        document.getElementById('auto-sorteio').setAttribute('disabled','true');
        //atualiza lista
        list();

    }else{
        document.getElementById('auto-sorteio').setAttribute('disabled','false');
        alert('Sorteio finalizado! Não existe amigo na lista disponivel para troca.');
        reiniciarJogo();
    }
}

