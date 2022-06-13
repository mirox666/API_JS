let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")
let campoBusca =document.querySelector("#campo")
let btnFiltrar = document.querySelector("#filtrar")

async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"
    try {
        let resultado = await fetch(url)
    
        const dados = await resultado.json()

        for(elementos of dados.results){
            //console.log(` Olá,sou ${elementos.name} nasci no ano  ${elementos.birth_year}`)
            //Criando elementos html dinamicamente
            /*
            const itemLista = document.createElement("li")
            itemLista.classList.add("list-group-item")
            itemLista.textContent = `olá meu nome é ${elementos.name} ,meu pesso é ${elementos.mass} , minha cor de cabelo é ${elementos.hair_color} e meu gênero é ${elementos.gender} `
            
            lista.appendChild(itemLista)
            */
           //criando elementos html
            const itemTabela = document.createElement("tr")
            const tdNome = document.createElement("td")
            const tdPeso = document.createElement("td")
            const tdCorOlhos = document.createElement("td")
            
            //Criando os conteúdo das colunas
            tdNome.textContent = elementos.name
            tdPeso.textContent = elementos.mass
            tdCorOlhos.textContent = elementos.eye_color 
            
            //Adicionando os elementos em suas respectivas tags Mãe ou Pai
            itemTabela.appendChild(tdNome)
            itemTabela.appendChild(tdPeso)
            itemTabela.appendChild(tdCorOlhos)
            tabela.appendChild(itemTabela)
        }

        console.log(dados.results)
    } catch (error) {
        console.log("O seguinte erro aconteceu", error)
    }
    

   
}

async function filtrarDados(idPersonagem){
    const url = `https://swapi.dev/api/people/${idPersonagem}/?format=json`
    
    try {
        let resultado = await fetch (url)
        const dados = await resultado.json()
        console.log(dados)

    } catch (error) {
        console.log("O erro é o seguinte:",erro)
    }
}

//carregarDados()
btnFiltrar.addEventListener('click', (evento)=>{
    evento.preventDefault()
    if(campoBusca.value != "" && campoBusca.value >=1 && campoBusca.value <=82){
        filtrarDados(campoBusca.value)
    }
    else{
        alert("Insira um valor no campo para pesquisar ")
    }
})