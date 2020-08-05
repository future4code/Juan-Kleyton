function CriarTarefa () {
    const botarTarefa = document.getElementById("tarefa")
    const diadaSemana = document.getElementById("dias-semana")
    const tarefa = document.getElementById("tarefa").value;

if ((botarTarefa.value !== "")&&(botarTarefa.value !== undefined))// verifica se tá em branco

    switch (diadaSemana.value) {
            case "domingo":
                document.getElementById("domingo").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;

            case "segunda":
                document.getElementById("segunda").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;

            case "terca":
                document.getElementById("terca").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;
            
            case "quarta":
                document.getElementById("quarta").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;
            
            case "quinta":
                document.getElementById("quinta").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;
            
            case "sexta":
                document.getElementById("sexta").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;
            
            case "sabado":
                document.getElementById("sabado").innerHTML += "<div>" + botarTarefa.value + "</div>"
                break;

            default:
                console.log("Ocorreu um erro na escolha do dia da semana")
    
    }if (tarefa !== ""){
        document.getElementById("tarefa").value= ""
    }else{
        alert("Opa, você não digitou uma tarefa :(")
    }
}
