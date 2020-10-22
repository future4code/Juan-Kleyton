// a)
// entradas: 2 numeros - a e b
// saidas : numero maior, menor, media entre eles
// b) number, boleano e string
function obterEstatisticas(numeros:number[]) : object {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}