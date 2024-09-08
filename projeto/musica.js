// ARMAZENAMENTO DE DADOS ----------------------------------------------------------------------------------------------------------------------------

 // Criamos uma lista de objetos, onde cada música é um objeto, e suas informações são atributos

    let musicas_dados=[

        {
            imagem: "imagens/celine.jpg",
            nome:"I'm Alive",
            artista:"Celine Dion",
            lancamento:"2000",
            genero:"Pop",
            link:"https://youtu.be/NJsa6-y4sDs?si=oS8GlhvvQSgw5lpF",
        },
        {
            imagem: "imagens/beatles.jpg",
            nome:"Here Comes The Sun",
            artista:"Beatles",
            lancamento:"1969",
            genero:"Pop rock",
            link:"https://youtu.be/xUNqsfFUwhY?si=pP0CKXvgc5r11czv",
        },
        {
            imagem: "imagens/michael.jpg",
            nome: "The Way You Make Me Feel",
            artista: "Michael Jackson",
            lancamento: "1987",
            genero: "Pop",
            link: "https://youtu.be/HzZ_urpj4As?si=F6MOopWND_CwDPY7",
        },
        {
            imagem: "imagens/jungkook2.jpeg",
            nome: "Standing Next to You",
            artista: "Jungkook",
            lancamento: "2024",
            genero: "Pop",
            link: "https://youtu.be/UNo0TG9LwwI?si=68w5CivvR2i_Bu4E",
        },
        {
            imagem: "imagens/baco.jpg",
            nome: "Lágrimas",
            artista: "Baco Exu do Blues ft. Gal Costa",
            lancamento: "2022",
            genero: "Hip Hop/Trap",
            link: "https://youtu.be/IwRZP9V-gYE?si=t4c6TdI2sAWfgBia"
        },
        {
            imagem: "imagens/raimundo.png",
            nome: "Lugar Ao Sol",
            artista: "Raimundos",
            lancamento: "2017",
            genero: "Rock alternativo",
            link: "https://youtu.be/pufRQb6skNM?si=DB8d8gYN5ZA42rS4",
        },
        {
            imagem: "imagens/canudinho.jpg",
            nome: "Canudinho",
            artista: "Gusttavo Lima ft. Ana Castela",
            lancamento: "2024",
            genero: "Sertanejo",
            link: "https://youtu.be/h09p0IGiKaE?si=EqfuWkfEhRCEU95l",
        },
        {
            imagem: "imagens/valhalla2.png",
            nome: "Valhalla",
            artista: "Akashi Cruz ft. Barmilly",
            lancamento: "2023",
            genero: "Trap/Rap",
            link: "https://youtu.be/nX43Hez8qf8?si=MGFRpSFsNYDlqmvk",
        },
        {
            imagem: "imagens/frank.jpg",
            nome: "That's Life",
            artista: "Frank Sinatra",
            lancamento: "1966",
            genero: "Pop/Jazz",
            link: "https://youtu.be/TnlPtaPxXfc?si=zAGUtVlBB4B5Ecxh"
        },
        {
            imagem: "imagens/elvis.jpg",
            nome: "My Way",
            artista: "Elvis Presley",
            lancamento: "1972",
            genero: "Rock",
            link: "https://youtu.be/LKxqqA8hDt4?si=Tzly4fuPBHNkofrA"
        },
        {
            imagem: "imagens/devil.jpg",
            nome: "Devil Trigger",
            artista: "Casey Edwards ft. Ali Edwards",
            lancamento: "2018",
            genero: "Industrial Rock",
            link: "https://youtu.be/-WpnPSChVRQ?si=R0tc06Rye-O_50Y3"
        },
        {
            imagem: "imagens/raul.jpg",
            nome: "Metamorfose Ambulante",
            artista: "Raul Seixas",
            lancamento: "1973",
            genero: "Rock/Folk",
            link: "https://youtu.be/CmB4sfoZkwo?si=W52PKnbQpONLFTBA"
        },
    ]

// PARTE FUNCIONAL --------------------------------------------------------------------------------------------------------------------------------------------------

// Criamos uma função para a pesquisa, essa função se localiza justamente no botão de pesquisar. Ou seja, esta função será utilizada sempre que o usuário clicar no botão de pesquisa, por isso definimos o "onclick" na tag button no HTML

function pesquisarMusicas(){
       
    // Aqui, criamos uma variável para se referir a todo o conteúdo do site onde as músicas estão, e para isso criamos um id na tag "section" onde as músicas estão, e colocamos todo o valor dentro dessa variável, ou seja, esta variável referencia todo o conteúdo do HTML onde as músicas estão. Isso se dá pela referência ao ID, pois "getElementByID" é basicamente "pegue o elemento pelo id"
    let section_musicas=document.getElementById("resultados-músicas")

    // Aqui, fazemos basicamente o mesmo que acima. Na barra de pesquisa tem um input, e este input precisa ser validado. Por isso criamos um id na tag input no HTML, e criamos uma variável que irá receber o valor desse input (por isso o .value, pois irá receber apenas o valor)
    let barra_musica=document.getElementById("barra-musica").value
    
    // Aqui criamos uma condição onde, caso o input seja nulo (usuário não digitou nada), a função terminará e nada abaixo ocorrerá
    if(barra_musica==""){
        return
    }
  
        
        // Aqui, criamos uma variável (que se inicializa vazia, justamente para acumular valores) que irá cada elemento dentro da tag "section" onde o conteúdo está (por isso loop de for..of que significa "para cada dado dentro da lista de objetos") e dentro desse for, temos outra condição onde, se caso o valor do input (o que o usuário digitou) for igual ao atributo do objeto (música), tal elemento aparecerá na tela. Os atributos selecionados foram nome da música, artista, data de lançamento, e gênero
        // OBS: O input deve ser idêntica ao elemento

        let resultmusica=" "
    
        for(let dado of musicas_dados){
       
            if(dado.nome.includes(barra_musica) || dado.artista.includes(barra_musica) || dado.lancamento.includes(barra_musica) || dado.genero.includes(barra_musica)) {
                resultmusica += `
                <div class="col" style="display: flex; justify-content: center; !important">
                   <div class="card" style="width: 18rem; background-color: rgb(39, 38, 38); color: white; padding-bottom: 20px;">
                      <img src="${dado.imagem}" class="card-img-top" alt="...">
                      <div class="card-body">
                           <h5 class="card-title">${dado.nome}</h5>
                           <p class="card-text">Artista: ${dado.artista}</p>
                           <p class="card-text">Data de Lançamento: ${dado.lancamento}</p>
                           <p class="card-text">Gênero: ${dado.genero}</p>
                           <a href="${dado.link}" target="_blank" class="btn btn-primary">Ouça Agora.</a>
                       </div>
                   </div>
               </div>
             `      
            }
        }

        // E por fim, o elemento referenciado pelo input do usuário irá para a variável section_musicas, que terá seu valor alterado, assim mostrando o elemento na tela
    
        section_musicas.innerHTML=resultmusica
    
}
    
    

