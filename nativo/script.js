let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")


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
            const itemTabela = document.createElement("tr")
            const tdNome = document.createElement("td")
            const tdPeso = document.createElement("td")
            const tdCorOlhos = document.createElement("td")

            
        }

        console.log(dados.results)
    } catch (error) {
        console.log("O seguinte erro aconteceu", error)
    }
    

   
}

carregarDados()