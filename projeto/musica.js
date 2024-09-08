// ARMAZENAMENTO DE DADOS ----------------------------------------------------------------------------------------------------------------------------

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



function pesquisarMusicas(){
           
        let section_musicas=document.getElementById("resultados-músicas")
        let barra_musica=document.getElementById("barra-musica").value
    
        if(barra_musica==""){
            return
        }
  
        

        
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
    
        section_musicas.innerHTML=resultmusica
    
}
    
    

