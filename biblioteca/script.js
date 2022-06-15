let bloco = document.querySelector("#bloco")

async function carregarDados(){
    const url = "https://swapi.dev/api/planets/?format=json"
    
    try {
        const resultado = await axios.get(url)
        console.log(resultado.data.results)
        const dados = resultado.data.results
         //Criando elementos Html
        for(elementos of dados){
            const texto = document.createElement('p')
         texto.classList.add("lead")
         texto.textContent = `Você esta no planeta ${elementos.name}, o clima aqui é ${elementos.climate} e o terreno é ${elementos.terrain}`

         bloco.appendChild(texto)
        }


    } catch (error) {
        console.log(`O seguinte erro ocorreu ${error}`)
    }
}
carregarDados()