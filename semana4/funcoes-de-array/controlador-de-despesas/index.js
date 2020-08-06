let array = []
mostrarDespesas(array) 
mostrarExtrato() 

    function mostrarDespesas(despesas){

        let Despesas = document.getElementById('despesas')
        Despesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
            despesas.forEach((despesas) => {
        Despesas.innerHTML += `<p>valor: R$${despesas.valor} | tipo: ${despesas.tipo} |  descrição: ${despesas.descricao}</p>`
    })
}

    function adicionarDespesas(){
        
        let valorCadastrado = document.getElementById('CadastraValor')
        let tipoCadastrado = document.getElementById('tiposCadastros')
        let descricaoCadastrada = document.getElementById('descreverCadastro')


if(valorCadastrado !== "" && tipoCadastrado !== "" && descricaoCadastrada == ""){
    let incluirDespesas = {
        valor: parseInt(valorCadastrado.value),
        tipo: tipoCadastrado.value,
        descricao: descricaoCadastrada.value,
    }

    array.push(incluirDespesas)
    console.log(array)
    
    valorCadastrado.value = ""
    tipoCadastrado.value = ""
    descricaoCadastrada.value = ""

    retirarFiltros() // serve para chamar mostrarDespesas
        mostrarExtrato()
    }
}

function filtrarDespesas(){
        let tipodoFiltro = document.getElementById('FiltroDespesas').value
        let valorMin = parseInt(document.getElementById('FiltroMin').value)
        let valorMax = parseInt(document.getElementById('FiltroMax').value)
    
        if(valorMin == "" && valorMax == ""){
            let FiltroDespesas = array.filter((despesas) => {
                if((despesas.tipo === tipodoFiltro || tipodoFiltro === "todos") && despesas.valor <= valorMax && despesas.valor >= valorMin){
                    return true
                }
                return false
            })
            mostrarDespesas(FiltroDespesas)
        }
    }

    function retirarFiltros(){
        document.getElementById('FiltroDespesas').value = ""
        document.getElementById('FiltroMin').value = ""
        document.getElementById('FiltroMax').value = ""
        mostrarDespesas(array)
    }
