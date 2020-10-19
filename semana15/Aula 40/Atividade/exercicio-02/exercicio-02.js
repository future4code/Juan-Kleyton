// Exercicio 02
    const operacao = process.argv[2]
    const numero1 = Number(process.argv[3]);
    const numero2 = Number(process.argv[4]);
    let resultado = 0

    switch(operacao){
        case "soma":
           resultado =  numero1 + numero2
            break;
        case "subt":
            resultado  = numero1 - numero2
            break;

            case "mult":
            resultado  = numero1 * numero2
            break;

            case "div":
            resultado  = numero1 / numero2
            break;
    }

    

    console.log (`Resultado = ${resultado}`)