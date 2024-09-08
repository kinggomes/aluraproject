// ARMAZENAMENTO DE DADOS ----------------------------------------------------------------------------------------------------------------------------

// Criamos uma lista de objetos, onde cada jogo é um objeto, e suas informações são atributos

let jogos_dados=[

    {
        imagem: "imagens/god.jpg",
        nome: "God of War Ragnarök",
        lancamento: "2022",
        plataformas: "PlayStation 5, PlayStation 4",
        desenvolvedor: "Santa Mônica Studio",
        link: "ttps://www.playstation.com/pt-br/games/god-of-war-ragnarok/",
    },
    {
        imagem: "imagens/finalfantasy.jpg",
        nome: "Final Fantasy XVI",
        lancamento: "2023",
        plataformas: "PlayStation 5, PC",
        desenvolvedor: "Square Enix, Creative Business Unit III",
        link:"https://www.playstation.com/pt-br/games/final-fantasy-xvi/",
    },
    {
        imagem: "imagens/fifa.jpg",
        nome: "EA Sports FC 24",
        lancamento: "2023",
        plataformas: "PlayStation 5, Xbox Series X/S",
        desenvolvedor: "Eletronic Arts",
        link: "https://www.ea.com/pt-br/games/ea-sports-fc/fc-24/buy",
    },
    {
        imagem: "imagens/lost2.jpg",
        nome: "Lost in Random",
        lancamento: "2021",
        plataformas: "Nintendo Switch, PlayStation 5, Xbox Series X/S, PC",
        desenvolvedor: "Zoink Games",
        link: "https://store.steampowered.com/app/1462570/Lost_in_Random/",
    },
    {
        imagem: "imagens/gta.webp",
        nome: "Grand Theft Auto: San Andreas",
        lancamento: "2004",
        plataformas: "PlayStation 2, PlayStation 3, Xbox 360, Android, PC",
        desenvolvedor: "Rockstar Games",
        link: "https://store.steampowered.com/agecheck/app/12120"
    },
    {
        imagem: "imagens/bully.jpg",
        nome: "Bully",
        lancamento: "2008",
        plataformas: "PlayStation 2, Xbox 360, Android, PC",
        desenvolvedor: "Rockstar",
        link: "https://store.steampowered.com/app/12200/Bully_Scholarship_Edition/"
    },
    {
        imagem: "imagens/kof.png",
        nome: "King of Fighters 2002",
        lancamento: "2002",
        plataformas: "PC, PlayStation 2",
        desenvolvedor: "SNK",
        link: "https://store.steampowered.com/app/222440/the_king_of_fighters_2002_unlimited_match"
    },
    {
        imagem: "imagens/freefire.jpg",
        nome: "Free Fire",
        lancamento: "2017",
        plataformas: "Android, IOS, PC",
        desenvolvedor: "Garena International",
        link: "https://play.google.com/web/store/apps/details?id=com.dts.freefireth&hl=pt"
    },
    {
        imagem: "imagens/skyrim.png",
        nome: "The Elder Scrolls V: Skyrim",
        lancamento: "2011",
        plataformas: "PlayStation 4, Xbox One, Xbox 360, PC",
        desenvolvedor: "Bethesda Game Studios",
        link: "https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/"
    },
    {
        imagem: "imagens/csgo.jpg",
        nome: "Counter Strike: Global Offensive",
        lancamento: "2012",
        plataformas: "PC, Xbox 360, PlayStation 3",
        desenvolvedor: "Valve",
        link: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        imagem: "imagens/acflag.jpeg",
        nome: "Assassin's Creed IV: Black Flag",
        lancamento: "2013",
        plataformas: "PlayStation 3, Xbox 360, PlayStation 4, Xbox One, PC",
        desenvolvedor: "Ubisoft",
        link: "https://store.steampowered.com/app/242050/Assassins_Creed_IV_Black_Flag/"
    },
    {
        imagem: "imagens/cod.jpeg",
        nome: "Call of Duty: Modern Warfare 2",
        lancamento: "2009",
        plataformas: "PlayStation 3, Xbox 360, PC",
        desenvolvedor: "Infinity Ward",
        link: "https://store.steampowered.com/app/10180/Call_of_Duty_Modern_Warfare_2_2009/"
    },

]

// PARTE FUNCIONAL --------------------------------------------------------------------------------------------------------------------------------------------------

// Criamos uma função para a pesquisa, essa função se localiza justamente no botão de pesquisar. Ou seja, esta função será utilizada sempre que o usuário clicar no botão de pesquisa, por isso definimos o "onclick" na tag button no HTML

function pesquisarJogos(){

    // Aqui, criamos uma variável para se referir a todo o conteúdo do site onde os jogos estão, e para isso criamos um id na tag "section" onde os jogos estão, e colocamos todo o valor dentro dessa variável, ou seja, esta variável referencia todo o conteúdo do HTML onde os jogos estão. Isso se dá pela referência ao ID, pois "getElementByID" é basicamente "pegue o elemento pelo id"
    let section_jogos=document.getElementById("resultados-jogos")

    // Aqui, fazemos basicamente o mesmo que acima. Na barra de pesquisa tem um input, e este input precisa ser validado. Por isso criamos um id na tag input no HTML, e criamos uma variável que irá receber o valor desse input (por isso o .value, pois irá receber apenas o valor)
    let barra_jogo=document.getElementById("barra-jogo").value
    

    // Aqui criamos uma condição onde, caso o input seja nulo (usuário não digitou nada), a função terminará e nada abaixo ocorrerá
    if(barra_jogo==""){
        return
    }


   // Aqui, criamos uma variável (que se inicializa vazia, justamente para acumular valores) que irá cada elemento dentro da tag "section" onde o conteúdo está (por isso loop de for..of que significa "para cada dado dentro da lista de objetos") e dentro desse for, temos outra condição onde, se caso o valor do input (o que o usuário digitou) for igual ao atributo do objeto (jogo), tal elemento aparecerá na tela. Os atributos selecionados foram nome do jogo, plataformas, e desenvolvedores
   // OBS: O input deve ser idêntica ao elemento

    let resultjogos=" "

    for(let dado of jogos_dados){

        if(dado.nome.includes(barra_jogo) || dado.plataformas.includes(barra_jogo) || dado.desenvolvedor.includes(barra_jogo)) {
            resultjogos += `
               <div class="col" style="display: flex; justify-content: center; !important">
                    <div class="card" style="width: 18rem; background-color: rgb(39, 38, 38); color: white; padding-bottom: 45px;">
                          <img src="${dado.imagem}" class="card-img-top" alt="...">
                          <div class="card-body">
                          <h5 class="card-title">${dado.nome}</h5>
                          <p class="card-text">Data de Lançamento: ${dado.lancamento}</p>
                          <p class="card-text">Plataformas: ${dado.plataformas}</p>
                          <p class="card-text">Desenvolvedores: ${dado.desenvolvedor}</p>
                          <a href="${dado.link}" target="_blank" class="btn btn-primary">Jogue Agora.</a>
                       </div>
                   </div>
               </div>
            `
        }
    }

    // E por fim, o elemento referenciado pelo input do usuário irá para a variável section_filmes, que terá seu valor alterado, assim mostrando o elemento na tela

    section_jogos.innerHTML=resultjogos

}