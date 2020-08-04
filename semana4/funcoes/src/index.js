//Exercícios de interpretação de código

// 1- 
//a)Imprimirá variavel 2, 5 vezes = 10
//  e a variavel 10, 5 vezes = 50
// b) não a acontecia nada, pois não foi impresso no console

//2- 
// a)imprime "Darvas" e "Goli" pois seus indices são menores que 2
// b) Imprimirei ambos os nomes, pois seuis indices são menores que 2

//3- pega o resto da divisao que é zero, e multiplica por ele mesmo, resultando assim em um
//array vazio

//Exercícios de escrita de código

//4-  
        // function sobre (Nome,Idade,Cidade,estudante){
        //     if(estudante === true){
        //         console.log (`Eu sou${Nome}, tenho ${Idade}anos, moro em ${Cidade} e sou Estudante`)
        //     }else if (estudante === false){
        //         console.log (`Eu sou ${Nome}, tenho ${Idade}  anos, moro em ${Cidade} e não sou Estudante`)
        //     }
        // }

        //     const imprimir = sobre (" Juan ", 28 , "Natal" , true)

//5- 
    //a)
        // function somarDoisNumeros(a,b) {
        //      const soma = a+b
        //      console.log(soma)

        // }


        //     somarDoisNumeros(1, 2)

    //b)
//     function somarDoisNumeros(a,b) {
//         if(a > b){
//             console.log(`O numero ${a} é maior que ${b}`)
//         } else {
//             console.log(`O numero ${a} é menor que ${b}`)
//         }

//    }


//        const imprimir = somarDoisNumeros ( 3,2)

//c)
    
// function imprime10vezes(mensagem) {
//     for (let i = 0; i < 10; i++) {
//         console.log(mensagem)
//     }
// }

// imprime10vezes("10 vezes")


//6-
// a)
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function verificaElementos(arrayElementos) {
//     return arrayElementos.length
// }
// console.log(verificaElementos(array))


// b)
// function verificaPar(numero) {
//     if (numero % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(verificaPar(1))
// console.log(verificaPar(2))


// c)

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaParesArray(arrayNumeros) {
//     let quantidadeDePares = 0

//     for (let elemento of arrayNumeros) {
//         if (elemento % 2 === 0) {
//             quantidadeDePares++
//         }
//     }

//     return quantidadeDePares
// }

// console.log(verificaParesArray(array))



// d.

// function verificaPar(numero) {
//     if (numero % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function verificaQuatidadeDeParesDoArray(arrayDeNumeros) {
//     let arrayDePares = []

//     for (let elemento of arrayDeNumeros) {
//         if (verificaSeEhPar(elemento)) {
//             arrayDePares.push(elemento)
//             //console.log(arrayDePares)
//         }
//     }

//     return arrayDePares.length
// }

// console.log(verificaQuatidadeDeParesDoArray(array))


