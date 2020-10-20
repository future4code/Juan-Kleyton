//a)
// const minhaString:string= 3
//Acontece um erro, pois que a variavel tá declarada como string e tá recenbendo um numero como valor

// //b) 
//     const meuNumero:number | string = 7
    // para recebe uma string tbm, deve-se declara o type tanto number como string

// c)
        // const pessoa : {nome: string, idade : number, corFavorita: string} = {

        //     nome : "Juan",
        //     idade: 28,
        //     corFavorita : "Azul"
        // }

        // declararei um tipo para casa uma das informações

//  d)

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavotita: string

// }

//     const informacoes91: pessoa = {
//         nome : "Juan",
//         idade: 28,
//         corFavotita: "Azul"
//     },

//      informacoes02: pessoa = {
//         nome : "Mary",
//         idade: 23,
//         corFavotita: "Rosa"
//     }

//     const informacoes03: pessoa = {
//         nome : "Pedro",
//         idade: 18,
//         corFavotita: "Preto"
//     }

// e)
//  enum CORES{
//     VERMELHO = "Vermelho",
//     LARANJA = "Laranja",
//     AMARELO =  "Amarelo",
//     VERDE =  "Verde",
//     AZUL =  "Azul",
//     ANIL =  "Anil",
//     VIOLETA = "Violeta"
    
// }

// type pessoa = {
//         nome: string,
//         idade: number,
//         corFavotita: string
    
//     }
    
//         const informacoes91: pessoa = {
//             nome : "Juan",
//             idade: 28,
//             corFavotita: CORES.AZUL
//         },
    
//          informacoes02: pessoa = {
//             nome : "Mary",
//             idade: 23,
//             corFavotita: CORES.VIOLETA
//         }
    
//         const informacoes03: pessoa = {
//             nome : "Pedro",
//             idade: 18,
//             corFavotita: CORES.ANIL
//         }
    
        