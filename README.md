# AmigoSecreto

Este é um projeto de Amigo Secreto onde se organiza uma lista de amigos para um sorteio no qual se revela o nome do amigo secreto de forma automatizada, garantindo que todos participem do jogo. 
A aplicação está disponível clicando nesse [LINK](https://rosanabaena.github.io/AmigoSecreto/) do GitHub Pages!

[Assista ao vídeo de demonstração no YouTube](https://www.youtube.com/embed/C0pABV2iu-8)

## Tópicos

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Telas Web](#telas-web)
- [Funcionalidades](#funcionalidades)
- [Usos](#usos)
- [Contribuições](#contribuições)
- [Licença](#licença)
- [Contato](#contato)

## Sobre
O amigo secreto é um jogo tradicional onde os participantes realizam um sorteio para saber com qual amigo vai trocar presentes. O objetivo desse projeto é facilitar a organização do sorteio, automatizando o processo e evitando erros de repetição. O desenvolvimento desse projeto faz parte do curso Oracle Next Education (ONE), realizado pela Oracle em parceria com a Alura.

## Tecnologias Utilizadas
- **HTML** - Estrutura da página web.
- **CSS** - Estilização da página web.
- **JavaScript** - Linguagem principal para a implementação das funcionalidades da aplicaçao.
- **Node.js** - Ambiente de execução para JavaScript no servidor.
- **Random** - Para garantir um sorteio aleatório.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/rosanabaena/AmigoSecreto
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd AmigoSecreto
   ```
3. Abra a página inicial:

· No Linux ou Mac:
   ```bash
   open index.html
   ```
 · No Windows:
   ```bash
   index.html
   ```
## Telas Web

### Inicial
<img src="assets/tela_inicial.png" alt="Tela Inicial Web" width="500"> 

### Adicionando um ou vários nomes separados por vírgula 
<img src="assets/tela_inicial_adicionar_amigos.png" alt="Tela Inicial Web" width="500"> 

### Apresentando a lista de amigos
<img src="assets/tela_inicial_lista_amigos.png" alt="Tela Inicial Lista Amigos Web" width="500"> 

### Exibindo amigo sorteado e confetes
<img src="assets/tela_amigo_sorteado.png" alt="Tela Amigo Sorteado Web" width="500"> 

## Funcionalidades
- **Adicionar um ou vários Amigos**: 
  - Permite ao usuário adicionar um ou vários nomes de amigos a uma lista separando-os por virgulas.
  <br><img src="assets/botao_add_amigos.png" alt="Campo para digitar nome" style="height: 80px;"><br>

  - Ao clicar em "Adicionar", o nome do amigo inserido no campo aparecerá em uma lista abaixo.
  <br><img src="assets/adicionar_lista.png" alt="Lista" style="height: 80px;"><br>

  - Se o campo de texto estiver vazio ou o nome já estiver na lista, um alerta pedirá para digitar um nome válido.
  <br><img src="assets/alerta.png" alt="Alerta nome inválido" style="height: 80px;"><br>

  - Se o nome contiver caracteres diferentes de letras, uma mensagem indicará que o nome é inválido.
  <br><img src="assets/alerta_letras.png" alt="Alerta somente letras" style="height: 80px;"><br>


- **Visualizar Lista de Amigos**: Exibe a lista de amigos adicionados e se atualiza de acordo com os amigos sorteados ou devolvidos na lista.

- **Sortear Amigo**: Sorteia um amigo aleatoriamente da lista e exibe o nome sorteado juntamente com uma explosão de confetes.
<br><img src="assets/botao_sortear_amigo.png" alt="Sortear amigo" style="height: 80px;"><br>

- **Devolver Amigo Sorteado**: Após o sorteio é permitido uma unica devolução para poder repetir o sorteio, seja por ter sorteado a si mesmo ou outro motivo. O botão de Devolver Amigo Sorteado fica habilitado uma vez e logo após a devoluçao se desabilita.
<br><img src="assets/botao_devolver_amigo.png" alt="Devolver Amigo Sorteado" style="height: 80px;"><br>

- **Limpar Campo**: Limpa o campo de entrada de texto após adicionar um amigo.

- **Mensagens de Validação**: Exibe mensagens apropriadas se a lista de amigos estiver vazia ou se houver menos de dois amigos para sortear.

- **Reiniciar o Jogo**: Quando todos os amigos estiverem sorteados a lista estará vazia e aparecerá um alerta. Após esse alerta o jogo será reiniciado.
<br><img src="assets/alerta_sorteio_finalizado.png" alt="Amigo sorteado" style="height: 80px;"><br>

## Usos
1. **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de entrada.
   - Clique no botão "Adicionar Amigo".
   - O nome será adicionado à lista de amigos exibida na tela.

2. **Sortear Amigo**:
   - Clique no botão "Sortear Amigo".
   - Se houver menos de dois amigos na lista, uma mensagem de alerta será exibida.
   - Se houver pelo menos dois amigos na lista, um nome será sorteado e exibido na tela.
   - A lista de amigos a serem sorteados vai reduzindo até esvaziar, significando que todos foram sorteados.
   - A lista de amigos será limpa para um novo sorteio quando todos os amigos já estiverem sorteados e a lista vazia.

3. **Trocar Amigo**:
   - A cada sorteio realizado é permitido realizar a troca do amigo uma única vez
   - O amigo sorteado e trocado terá o nome retornado na lista de amigos que ainda estão disponíveis para sorteio.

## Contribuições
Todas as contribuições são bem-vindas! 
1. Faça um fork deste repositório.
2. Crie uma branch para a sua funcionalidade:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas modificações e commite as alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas mudanças para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request para que sua contribuição seja revisada.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE.txt) para mais detalhes.

## Contato

Entre em contato comigo através do meu e-mail: [rosanabaena@gmail.com](mailto:rosanabaena@gmail.com)

