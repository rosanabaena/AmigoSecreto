//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//array para armazenar os nomes
let amigos = [];

/*
//mostra na tela o texto de acordo com a tag e texto informados
function carregaLista(tag,texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

//listar todos amigos ('ul') que estao no array
function listaAmigos(){
    carregaLista('listaAmigos',amigos);
}
*/
//percorre o array amigos e adicione cada nome como um elemento <li> 
function list(){
    // Seleciona o elemento <ul> onde os <li> serão adicionados
    let list = document.getElementById('listaAmigos');
    list.innerHTML = "";
    let li = document.createElement("li");
    
    // Percorre o array de amigos e adiciona cada nome como um elemento<li>
    for (let i=0; i<= amigos.length; i++){       
        // Verifica se o valor não é undefined ou null para listar        
        if (amigos[i] !== undefined && amigos[i] !== null) {    
            list.innerHTML += `<li>${amigos[i]}</li>`;
            console.log(amigos[i]);    
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
        limpaNome();
        return;
    }

    //valida se o campo esta vazio
    if (nome == ''){
        alert('Por favor, digite um nome!');
        return;
    }

    //valida se o nome digitado possui apenas letras
    if (!/^[a-zA-Z\s]+$/.test(nome)){
        alert(`Nome ${nome} inválido! Deve conter apenas letras!`);
        return;    
    }
    //adicionar o nome na lista de amigos
    amigos.push(nome);
    
}

//limpar o campo do nome depois de incluido na lista
function limpaNome(){
    campo = document.getElementById('amigo');
    campo.value = '';
}

//adicionar nome na lista
function adicionarAmigo(){
    let nomeDigitado = document.getElementById('amigo').value; 
    validaNomeDigitado(nomeDigitado);
    
    /*
    //identificar os nomes digitados separados por virgulas e inclui separados na lista
    if(nomeDigitado.includes(',')){
        let nomesDigitados = nomeDigitado.split(',');
        //identifica cada nome digitado e faz a validaçao separado
        for (let item of nomesDigitados){
            validaNomeDigitado(item);
        }
    }else {
        validaNomeDigitado(nomeDigitado);
    }
    */
   
    //listar nomes do array como elemento li
    list();
  
    //limpar o campo
    limpaNome();
        
}













//como exibir a lista de acordo com a digitaçao do nome?

//resultado sorteado
//exibirNaTela("resultado","Lorena");


