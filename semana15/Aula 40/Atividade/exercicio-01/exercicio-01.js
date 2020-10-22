// Exercicio 01

// a) São acessados no código pela propriedade process.argv
// b) 
    // const nome = process.argv[2];
    // const idade = process.argv[3];
    // console.log("Olá " + nome + "! " + "Você tem " + idade + " Anos ")

    // c) 

        const nome = process.argv[2];
        const idade = process.argv[3];
        const aumentaIdade = Number(idade) + 7;
        console.log(`Olá ${nome}! Você tem ${idade} Anos e terá ${(aumentaIdade)} daqui a sete anos` )

