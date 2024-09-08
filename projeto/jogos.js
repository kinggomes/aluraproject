// ARMAZENAMENTO DE DADOS ----------------------------------------------------------------------------------------------------------------------------

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

function pesquisarJogos(){

    let section_jogos=document.getElementById("resultados-jogos")
    let barra_jogo=document.getElementById("barra-jogo").value

    if(barra_jogo==""){
        return
    }





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

    section_jogos.innerHTML=resultjogos

}