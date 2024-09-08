// ARMAZENAMENTO DE DADOS ----------------------------------------------------------------------------------------------------------------------------

// Criamos uma lista de objetos, onde cada filme é um objeto, e suas informações são atributos

let filmes_dados=[

    {
        imagem: "imagens/jw4.jpg",
        nome: "John Wick: Capítulo 4",
        genero: "Ação",
        duracao: "2h 50min",
        direção: "Chad Stahelski",
        elenco: "Keanu Reeves, Donnie Yen, Bill Skarsgard",
        link: "https://youtu.be/qEVUtrk8_B4?si=HOlIivLy8V7PlqL-"
    },
    {
        imagem: "imagens/sociedade.jpg",
        nome: "Sociedade da Neve",
        genero: "Aventura/Thriller",
        duracao: "2h 24min",
        direção: "Juan Antonio Bayona",
        elenco: "Enzo Vogrincic, Matías Recalt",
        link: "https://youtu.be/9cjSePIf1l0?si=tVFPmKFqHbjao56r"
    },
    {
        imagem: "imagens/oppenheimer.png",
        nome: "Oppenheimer",
        genero: "Suspense",
        duracao: "3h",
        direção: "Christopher Nolan",
        elenco: "Cillian Murphy, Florence Pugh, Robert Downey Jr.",
        link: "https://youtu.be/bK6ldnjE3Y0?si=Yldebb3j2ZLeVruN"
    },
    {
        imagem: "imagens/pobres.jpg",
        nome: "Pobres Criaturas",
        genero: "Ficção Científica",
        duracao: "2h 21min",
        direção: "Yorgos Lanthimos",
        elenco: "Emma Stone, Mark Ruffalo, Willem Dafoe",
        link: "https://youtu.be/LSGFTlB45I4?si=qNeDhz1T5hd9Yrmt"
    },
    {
        imagem: "imagens/60min.webp",
        nome: "60 Minutos",
        genero: "Ação/Drama",
        duracao: "1h 29min",
        direção: "Oliver Kienle",
        elenco: "Emilio Sakraya, Dennis Mojen, Marie Mouroum",
        link: "https://youtu.be/IjGk6Ot15S8?si=VXqyXTJO2TF4hfNr"
    },
    {
        imagem: "imagens/anatomia.jpg",
        nome: "Anatomia de uma Queda",
        genero: "Policial/Drama",
        duracao: "2h 31min",
        direção: "Justine Triet",
        elenco: "Sandra Hüller, Milo Machado-Graner",
        link: "https://youtu.be/wUcOD9f4Dvo?si=xH1cJK025osHQnif"
    },
    {
        imagem: "imagens/fale.jpg",
        nome: "Fale Comigo",
        genero: "Terror",
        duracao: "1h 34min",
        direção: "Danny Philippou",
        elenco: "Ari McCarthy, Hamish Phillips, Sunny Johnson",
        link: "https://youtu.be/zIt5jSNPxNI?si=XWo9rNH3Os1b_zL5"
    },
    {
        imagem: "imagens/fastx.jpg",
        nome: "Velozes e Furiosos 10",
        genero: "Ação",
        duracao: "2h 21min",
        direção: "Louis Leterrier",
        elenco: "Vin Diesel, Michelle Rodriguez, Jason Momoa",
        link: "https://youtu.be/a1w9x5U88jU?si=we03dzB5PvBxLka-"
    },
    {
        imagem: "imagens/aranha2.jpeg",
        nome: "Homem Aranha 2",
        genero: "Ação",
        duracao: "2h 7min",
        direção: "Sam Raimi",
        elenco: "Tobey Maguire, James Franco, Alfred Molina",
        link: "https://youtu.be/fRQ67zp1dlg?si=GPpkxg4BopB-GVns"
    },
    {
        imagem: "imagens/coringa.webp",
        nome: "Coringa",
        genero: "Suspense/Drama",
        duracao: "2h 2min",
        direção: "Todd Phillips",
        elenco: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        link: "https://youtu.be/jfVTJm9NilA?si=dSkErBcEKga9Y1xN"
    },
    {
        imagem: "imagens/macaco.jpg",
        nome: "Planeta dos Macacos: A Guerra",
        genero: "Ação/Ficção Científica",
        duracao: "2h 21min",
        direção: "Matt Reeves",
        elenco: "Andy Serkis, Steve Zahn, Karin Konoval",
        link: "https://youtu.be/x2KAhHh7NUE?si=rBo_xv6CWT_30fo2"
    },
    {
        imagem: "imagens/avatar.jpg",
        nome: "Avatar",
        genero: "Aventura/Ficção Científica",
        duracao: "2h 42min",
        direção: "James Cameron",
        elenco: "Sam Worthington, Zoë Saldaña, Stephen Lang",
        link: "https://youtu.be/5PSNL1qE6VY?si=gVsx-ZzQxHYLiDNx"
    },

]


// PARTE FUNCIONAL --------------------------------------------------------------------------------------------------------------------------------------------------

// Criamos uma função para a pesquisa, essa função se localiza justamente no botão de pesquisar. Ou seja, esta função será utilizada sempre que o usuário clicar no botão de pesquisa, por isso definimos o "onclick" na tag button no HTML


function pesquisarFilmes(){
     
    // Aqui, criamos uma variável para se referir a todo o conteúdo do site onde os filmes estão, e para isso criamos um id na tag "section" onde os filmes estão, e colocamos todo o valor dentro dessa variável, ou seja, esta variável referencia todo o conteúdo do HTML onde os filmes estão. Isso se dá pela referência ao ID, pois "getElementByID" é basicamente "pegue o elemento pelo id"
    let section_filmes=document.getElementById("resultados-filmes")

    // Aqui, fazemos basicamente o mesmo que acima. Na barra de pesquisa tem um input, e este input precisa ser validado. Por isso criamos um id na tag input no HTML, e criamos uma variável que irá receber o valor desse input (por isso o .value, pois irá receber apenas o valor)
    let barra_filmes=document.getElementById("barra-filmes").value
    
    // Aqui criamos uma condição onde, caso o input seja nulo (usuário não digitou nada), a função terminará e nada abaixo ocorrerá
    if(barra_filmes==""){
        return
    }


    // Aqui, criamos uma variável (que se inicializa vazia, justamente para acumular valores) que irá cada elemento dentro da tag "section" onde o conteúdo está (por isso loop de for..of que significa "para cada dado dentro da lista de objetos") e dentro desse for, temos outra condição onde, se caso o valor do input (o que o usuário digitou) for igual ao atributo do objeto (filme), tal elemento aparecerá na tela. Os atributos selecionados foram nome do filme, direção, elenco, e gênero
    // OBS: O input deve ser idêntica ao elemento

    let resultfilmes=" "

    for(let dado of filmes_dados){

        if(dado.nome.includes(barra_filmes) || dado.genero.includes(barra_filmes) || dado.direção.includes(barra_filmes) || dado.elenco.includes(barra_filmes)){
            resultfilmes += `
                
                <div class="col" style="display: flex; justify-content: center; !important">
                   <div class="card" style="width: 18rem; background-color: rgb(39, 38, 38); color: white; padding: auto;">
                      <img src="${dado.imagem}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${dado.nome}</h5>
                          <p class="card-text">Gênero: ${dado.genero}</p>
                          <p class="card-text">Duração: ${dado.duracao}</p>
                          <p class="card-text">Direção: ${dado.direção}</p>
                          <p class="card-text">Elenco principal: ${dado.elenco}</p>
                          <a href="${dado.link}" target="_blank" class="btn btn-primary">Assista ao trailer.</a>
                      </div>
                   </div>
               </div>
            `
        }

    }

    // E por fim, o elemento referenciado pelo input do usuário irá para a variável section_filmes, que terá seu valor alterado, assim mostrando o elemento na tela

    section_filmes.innerHTML=resultfilmes


}